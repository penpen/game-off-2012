if (!Array.prototype.indexOf) {
    var err = "This MSIE is not supported."
    alert(err)
    throw new Error(err)
}

require(["fullscreen", "game", "keyboard", "music", "todo", "ui"],
    function() {
        for (var i = 0; i < arguments.length; ++i) {
            arguments[i].init()
        }
    })
