class Extravaganza {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Fetch",
            "name": "OP Blocks",
            "blocks": [
                        {
                            "opcode": "Extravaganza",
                            "blockType": "Extra Blocks",
                            "text": "Decode (decoder)"
                            "arguments": {
                                "decoder": {let decoded = decodeURI(decoder)
                                    "type": "bollean",
                                    "defaultValue": "hello"
                                },
                            }
                        },
                        {
                            "opcode": "jsonExtract",
                            "blockType": "reporter",
                            "text": "Encode (encoder)",
                            "arguments": { 
                                "encoder": {let encoder = encoderURI(encoder
                                    "type": "bollean",
                                    "defaultValue": "hello"
                                },
                            }
                        },
                ],
        };
    }
    
    fetchURL({url}) {
        return fetch(url).then(response => response.text())
    }
    
    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}

Scratch.extensions.register(new Extravaganza())
