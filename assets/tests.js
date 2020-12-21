'use strict';

define("sky/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate("DEPRECATED `import { ".concat(name, " } from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import { ").concat(name, " } from 'ember-power-select/test-support/helpers';`"), false, {
        until: '1.11.0',
        id: "ember-power-select-test-support-".concat(name)
      }));
      return fn.apply(void 0, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("sky/tests/integration/components/book-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | book-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <BookForm />
                */
                {"id":"1GJkc79w","block":"{\"symbols\":[],\"statements\":[[8,\"book-form\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <BookForm>
                        template block text
                      </BookForm>
                    
                */
                {"id":"tjpV7CbK","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"book-form\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("sky/tests/integration/components/create-book-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | create-book', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <CreateBook />
                */
                {"id":"fok9ZjOC","block":"{\"symbols\":[],\"statements\":[[8,\"create-book\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <CreateBook>
                        template block text
                      </CreateBook>
                    
                */
                {"id":"tzSqwWI4","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"create-book\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("sky/tests/integration/components/input-tags-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | input-tags', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <InputTags />
                */
                {"id":"SQp+D/t5","block":"{\"symbols\":[],\"statements\":[[8,\"input-tags\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <InputTags>
                        template block text
                      </InputTags>
                    
                */
                {"id":"65qY/7AL","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"input-tags\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("sky/tests/integration/components/meeting-item-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | meeting-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <MeetingItem />
                */
                {"id":"7+vEP9M9","block":"{\"symbols\":[],\"statements\":[[8,\"meeting-item\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <MeetingItem>
                        template block text
                      </MeetingItem>
                    
                */
                {"id":"WSJl86hv","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"meeting-item\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("sky/tests/integration/components/report-item-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | report-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <ReportItem />
                */
                {"id":"/PKHCjE1","block":"{\"symbols\":[],\"statements\":[[8,\"report-item\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <ReportItem>
                        template block text
                      </ReportItem>
                    
                */
                {"id":"jMFlPNZ5","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"report-item\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("sky/tests/integration/components/speaker-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | speaker-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <SpeakerForm />
                */
                {"id":"f8twbuWk","block":"{\"symbols\":[],\"statements\":[[8,\"speaker-form\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <SpeakerForm>
                        template block text
                      </SpeakerForm>
                    
                */
                {"id":"afp1UWaS","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"speaker-form\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("sky/tests/integration/components/speaker-item-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | speaker-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <SpeakerItem />
                */
                {"id":"pPrRFHoU","block":"{\"symbols\":[],\"statements\":[[8,\"speaker-item\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <SpeakerItem>
                        template block text
                      </SpeakerItem>
                    
                */
                {"id":"mvcNWn2I","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"speaker-item\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("sky/tests/test-helper", ["sky/app", "sky/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("sky/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("sky/tests/unit/controllers/book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:book');
      assert.ok(controller);
    });
  });
});
define("sky/tests/unit/controllers/create-book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | create-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create-book');
      assert.ok(controller);
    });
  });
});
define("sky/tests/unit/controllers/create-speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | create-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create-speaker');
      assert.ok(controller);
    });
  });
});
define("sky/tests/unit/controllers/edit-book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-book');
      assert.ok(controller);
    });
  });
});
define("sky/tests/unit/controllers/edit-speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-speaker');
      assert.ok(controller);
    });
  });
});
define("sky/tests/unit/controllers/meeting-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:meeting');
      assert.ok(controller);
    });
  });
});
define("sky/tests/unit/controllers/speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speaker');
      assert.ok(controller);
    });
  });
});
define("sky/tests/unit/models/book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('book', {});
      assert.ok(model);
    });
  });
});
define("sky/tests/unit/models/meeting-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('meeting', {});
      assert.ok(model);
    });
  });
});
define("sky/tests/unit/models/report-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | report', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('report', {});
      assert.ok(model);
    });
  });
});
define("sky/tests/unit/models/speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('speaker', {});
      assert.ok(model);
    });
  });
});
define("sky/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:book');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/book/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | book/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:book/index');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/create-book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | create-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:create-book');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/create-speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | create-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:create-speaker');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/edit-book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-book');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/edit-speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-speaker');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/meeting-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meeting');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/page-not-found-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | page-not-found', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:page-not-found');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/report-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | report', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:report');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/routes/speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speaker');
      assert.ok(route);
    });
  });
});
define("sky/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('application', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("sky/tests/unit/serializers/book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('book');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('book', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("sky/tests/unit/serializers/report-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | report', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('report');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('report', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("sky/tests/unit/serializers/speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('speaker');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('speaker', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("sky/tests/unit/services/data-service-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | data-service', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:data-service');
      assert.ok(service);
    });
  });
});
define("sky/tests/unit/transforms/array-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Transform | array', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var transform = this.owner.lookup('transform:array');
      assert.ok(transform);
    });
  });
});
define('sky/config/environment', [], function() {
  var prefix = 'sky';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('sky/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
