module.exports = function html() {
    var instance = {};

    instance.append = function append(htmlString, element) {
        var frag = document.createDocumentFragment(),
            temp = document.createElement('div');

        temp.innerHTML = htmlString;
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }

        element.appendChild(frag);
    };

    return instance;
}();
