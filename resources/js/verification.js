const Checksum = {
   ccitt: [],
  InitCcitt: function()
        {
        var i, tmp;
        for (i=0; i<256; i++)
              {
              tmp = i ^ (i >> 4);
              this.ccitt[i] = (tmp ^ (tmp << 5) ^ ((tmp & 0xF) << 12));
              }
        },
  //
  Crc16_Ccitt: function (arr, i, len)
        {
        var index, crc=0;
        if (!this.ccitt.length) this.InitCcitt();
        while (len-- > 0)
           {
           index =  (crc>>8) ^ arr[i++];
           crc   = ((crc<<8) ^ this.ccitt[index]) & 0xFFFF;
           }
        return crc;
        },
  


  Signed16: function (arr, i) {
    var val = (arr[i + 0] << 8) | arr[i + 1];
    if (val & 0x8000) val -= 0x10000;

    return val;
  }
};

function Unsigned16(arr, i) {
  return (arr[i + 0] << 8) | arr[i + 1];
}

function Unsigned32(arr, i) {
  return (arr[i + 0] << 24) | (arr[i + 1] << 16) | (arr[i + 2] << 8) | arr[i + 3];
}