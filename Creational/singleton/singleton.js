// Singleton Pattern ES6 Syntax

// IIFE is used to prevent instantiating multiple singletons
const singleton = (function() {
  let instance;

  // function init contains the logic of the singleton
  function init() {
    let _privateVar = "abc";
    function privateMethod() {
      console.log("123");
    }

    return {
      // public method that accesses the private variable
      publicMethod: () => {
        console.log(_privateVar);
      },
      // public method that accesses the private method
      revealPrivate: privateMethod()
    };
  }
  // IIFE returns an object with a getInstance method
  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();
