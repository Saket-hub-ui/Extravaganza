class Extravaganza {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Extravaganza",
            "name": "Block Helps",
            "blocks": [
                        {
                            "opcode": "Extravaganza",
                            "blockType": "Extra Blocks",
                            "text": "Glide [glideTo] seconds while changing x position by [changeX]",
                            "arguments": { let [newVariable] = 0)
                                "newVariable": { 
                                    "type": "string",
                                    "defaultValue": "username"
                
                glideTo (args, util) {
        const targetXY = this.getTargetX(args.TO, util);
        if (targetXY) {
            this.glide({SECS: args.SECS, X: targetX[changeX], util);
            
            changeX (args, util) {
        const dx = Cast.toNumber(args.DX);
        util.target.setXY(util.target.x + dx, util.target.y);
                                },
                            }
                        },
    {                                                
   
    extravaganzaURL({url}) {
        return extravaganza(url).then(response => response.text())
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
