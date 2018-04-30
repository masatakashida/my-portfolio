/*
  rx7.js

  Component, just a simple function.
  State, just a simple object.
  
  by UNIHO.

*/

const rx7 = (function() {
  "use strict";
  
  function error(msg) {
    throw new Error("Error in rx7: " + msg); 
  }

  function trimSpace(str) {
    return str.replace(/^\s+/, "").replace(/\s+$/, ""); 
  }

  function rx7(strings) {
    const values = Array.prototype.slice.call(arguments, 1);
    let rs = "";
    const objs = [];
    const objM = '\x02'; 
    const objMre = /\x02(\d+)\x02/;

    for (let i = 0; i < strings.length; i++) {
      rs += strings[i];  
      if (i < values.length) {
        //console.log(typeof values[i]);
        if (values[i] && typeof values[i] == 'object' && 'dangerouslyString' in values[i]) {
          rs += values[i].dangerouslyString;  
        } else {
          const j = objs.push(values[i]) - 1;
          rs = rs + objM + j + objM;
        }
      }
    }

    function obj2str(str) {
      const r = str.match(/\x02\d+\x02/g);
      if (r) {
        r.forEach(function(val) {
          const o = objs[Number(val.slice(1, -1))];
          switch(typeof o) {
            case 'object':
            case 'function':
              break;
            default:
              str = str.replace(val, o);
          }
        });
      }  
      return str;
    }

    function searchTag(val) {
      const l = val.length;
      let i = 0;
      let txt = "";
      while (i < l) {
        if (val[i] === "<") {
          // Comment?
          if (i+3 < l && val[i+1] === "!" && val[i+2] === "-" && val[i+3] === "-") {
            const p = val.indexOf("-->", i+5);
            if (p < 0) return null;
            i = p + 3; 
          } else 
            break;
        } else 
          txt += val[i++];  
      }  
      let r = "<";
      while (i < l) {
        const c = val[i];
        if (c === '"' || c === "'") {
          while (i < l) {
            r += val[i];
            if (val[i++] === c) break;
          }
        }
        if (i < l) {
          if (val[i] === ">") return [true, txt, r + ">", val.substr(i+1)];
          r += val[i];
        }
        i++;
      }
      return null;
    }

    function makeProps(txt) {
      const props = {};
      let keys = txt.match(
        /\S+\s*=\s*(?:(["'])[\s\S]*?\1|\S+)|\x02\d+\x02/g
      );
      if (keys) 
        keys.forEach(function(val) {
          if (val[0] == objM) {
            const o = objs[Number(val.slice(1, -1))];
            //props = Object.assign(props, o);
            for (let val in o) props[val] = o[val];
          } else {
            const p = val.indexOf("=");
            if (p < 0) error("Expected key=value.");
            let key = obj2str(val.substr(0, p)).trim();
            let v = val.substr(p+1);
            v = v.replace(/\/$/, ""); 
            v = trimSpace(v); 
            switch (v[0]) {
              case "'":
              case '"':
                v = obj2str(v);
                v = v.slice(1, -1); 
                break;
              case objM:
                v = v.match(objMre); 
                v = objs[v[1]];
                break;
              default:
                v = Number(obj2str(v));
            }
            //console.log(key +" = " + v);
            switch (key) {
              case 'class': key = 'className'; break;
              case 'for': key = 'htmlFor'; break;
            }
            props[key] = v;
          }
        });
      return props;
    }

    function getChildren(parent, rs) {
      let children = [];
      while (1) {
        if (!rs.trim()) {
          return ["", !children.length ? null : children];
        }
        const dom = searchTag(rs);
        if (!dom) error("No any tags!");

        const tag = dom[2].match(/<([\w\/!\x02]+)([\s\S]*)>/);
        if (!tag) error("No any tags!"); 
        let tagTxt = obj2str(tag[1]);
        let prpTxt = tag[2];
        // console.log("tag="+tagTxt);
        // console.log("prp="+prpTxt);

        if (dom[1].trim()) {
          // Text
          let s = dom[1];
          while (1) {
            let i = s.indexOf(objM);
            if (i >= 0) {
              let ss = s.substr(0, i);
              if (ss) children.push(ss);
              s = s.substr(i+1); 
              i = s.indexOf(objM);
              ss = s.substr(0, i);
              children.push(objs[Number(ss)]);
              s = s.substr(i+1);
            } else {
              if (s) children.push(s);
              break;
            }
          }
        }

        // Closing tag?
        if (tagTxt[0] === "/") {
          return [dom[3], !children.length ? null : children];
        }

        rs = dom[3];

        // Probably this is unnecessary processing.
        if (tagTxt.slice(-1) === "/") {
          tagTxt = tagTxt.slice(0, -1);
          prpTxt = "/";
        }  

        let tagComponent = tagTxt;

        if (tagTxt[0] === objM) {
          // use ReactClass
          let val = tagTxt.match(objMre); 
          val = objs[val[1]];
          if (typeof val === "function") {
            tagTxt = val.name;
            tagComponent = val;
          }
        } else {
          // search ReactClass
          for (let i = 0; i < rx7.ComponentStore._components.length; i++) {
            const val = rx7.ComponentStore._components[i];
            if (val.name === tagTxt) {
              tagComponent = val;
              break;
            }
          }
        }

        // make props
        let props = makeProps(prpTxt);
        if (rx7.overrideProps) props = rx7.overrideProps(tagTxt, props);
        if (prpTxt.slice(-1) != "/" && !(tagTxt in selfClosingTags)) {
          const r = getChildren(tagTxt, rs);
          rs = r[0]; 
          const c = r[1];
          //console.log("with child: " + tagTxt, props, c);
          if (!('key' in props)) props.key = children.length;
          children.push(React.createElement(tagComponent, props, c));
        } else {
          // Self-closing tag
          //console.log("no child: " + tagTxt, props);
          if (!('key' in props)) props.key = children.length;
          children.push(React.createElement(tagComponent, props));
        }  
      } // while
    } // func getChildren

    const c = getChildren("", rs)[1];
    return c.length == 1 ? c[0] : c;
  } // func rx7

  rx7.overrideProps = null; 

  rx7.ComponentStore = {
    //_state: {},
    _components: [],
    _subscribers: [],
    _reducer: null,
    _remover: function(list) {
      const item = Array.prototype.slice.call(arguments, 1);
      item.forEach(function(val) {
        const i = list.indexOf(val);
        if (i >= 0) list.splice(i, 1); 
      });
    },
    dispatch: function(action) {
      if (this._reducer) {
        // Just you can change states in your reducer!
        if (!action) action = {};
        const s = this._reducer(this._state, action);
        let r;
        let broadcast = true;
        if (Array.isArray(s)) {
          if (s.length > 0) {
            this._state = s[0];
            if (s.length > 1) {
              broadcast = !("broadcast" in s[1]) || s[1].broadcast;
              if ("result" in s[1]) r = s[1].result;
            }  
          }  
        } else {
          this._state = s;
        }  
        if (broadcast) {
          this._subscribers.forEach(function(val) {return val.f(this);}, r);
        }  
        return r;  
      }
    },
    assign: function() {
      let name;
      arguments.forEach(function(val) { 
        if (typeof val === 'function') {
          this._components.push(val);
          name = val.name;
        } else if (typeof val === 'object') {
          if (!this._state) this._state = {};
          if (name) this._state[name] = val;
        } else {
          name = val.toString();
        }  
      });
    },
    remove: function() {
      return this._remover(this._components, arguments);
    }, 
    subscribe: function(val, type) {
      const item = { f: val, type: type };
      this._subscribers.push(item);
      return function() { 
        this._remover(this._subscribers, item);
      };
    },
    get props() { // READ ONLY! You cannot change props(=states)!
      return this._state;
    },  
    set reducer(val) { 
      this._reducer = val;
      this.dispatch(); // Initial calling
    }, 
  };

  const selfClosingTags = {
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true,

    //common self closing svg elements
    path: true,
    circle: true,
    ellipse: true,
    line: true,
    rect: true,
    use: true,
    stop: true,
    polyline: true,
    polygon: true
  };

  return rx7;
})();

if (typeof module != "undefined" && module.exports != null) {
  module.exports = rx7;
}
