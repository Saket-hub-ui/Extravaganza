class Extravaganza {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Extravaganza",
            "name": "OP Blocks",
            "blocks": [
                        {
                            "opcode": "Extravaganza",
                            "blockType": "Extra Blocks",
                            "text": "Decode [decoder]",
                            "arguments": { let decoded = decodeURI(decoder)
                                "decoder": {
                                    "type": "string",
                                    "defaultValue": "scrat"
                                },
                            }
                        },
                        {
                            "opcode": "Extravaganza",
                            "blockType": "Extra Blocks",
                            "text": "Encode [encoder]",
                            "arguments": { let encoded = encodeURI(encoded)
                                "encoder": {
                                    "type": "string",
                                    "defaultValue": "scrat"                                },
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
