define("Validaciones/numeros", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PI = 3.14;
});
define("Validaciones/textos", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SALUDO = "Hola Mundo!";
});
define("app", ["require", "exports", "Validaciones/numeros", "Validaciones/textos"], function (require, exports, numeros_1, textos_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(numeros_1.PI);
    console.log(textos_1.SALUDO);
});
