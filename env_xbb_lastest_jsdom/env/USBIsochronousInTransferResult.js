// USBIsochronousInTransferResult对象

bodavm.memory.globalobj['USBIsochronousInTransferResult'] = function USBIsochronousInTransferResult() {
  console.log_copy('USBIsochronousInTransferResult 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBIsochronousInTransferResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBIsochronousInTransferResult': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBIsochronousInTransferResult'], "USBIsochronousInTransferResult");
bodavm.toolsFunc.defineProperty('USBIsochronousInTransferResult', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBIsochronousInTransferResult'].prototype, "USBIsochronousInTransferResult", "data_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBIsochronousInTransferResult', "packets", {
  configurable: true,
  enumerable: true,
  get: function packets() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBIsochronousInTransferResult'].prototype, "USBIsochronousInTransferResult", "packets_get", arguments);
  },
  set: undefined
}, 'prototype');