{//If we're not in strict mode, a plain function call sets the function's this value to the global object.
     function person(fn, ln) { 
          this.fn = fn
          this.ln = ln
          console.log(this===global)
     }
     let p = person("Huy", "Ngô")
     console.log(global.fn, global.ln)
}
{//If we're in strict mode, a plain function call sets the function's this value to undefined.
     "use strict"
     function person(fn, ln) {
          this.fn = "fn"
          this.ln = ln
     }
     let p = new person("Huy", "Ngô")
     console.log(p)
}