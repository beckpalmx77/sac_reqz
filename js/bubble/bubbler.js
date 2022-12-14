function Bubbler(items) {
    this.items = items;
    var body = document.getElementsByTagName('body')[0];

    var bubbler_wrapper = document.createElement('div');
    bubbler_wrapper.className = 'bubbler-wrapper';

    var menu_button = document.createElement('div');
    menu_button.className = 'bubbler-menu-loader';
    menu_button.innerHTML = '&#9776;';

    for (var i = this.items.length - 1; i >= 0; i--) {
        var child = document.createElement('div');
        child.className = 'bubbler-menu-item';
        child.innerHTML = this.items[i].icon;
        if (this.items[i].callback) {
            child.onclick = this.items[i].callback;
        }
        if (this.items[i].display) {
            for (var key in this.items[i].display) {
                if (!this.items[i].display.hasOwnProperty(key)) {
                    continue;
                }
                child.style[key] = this.items[i].display[key];
            }
        }

        var label_wrapper = document.createElement('label');
        label_wrapper.className = 'bubbler-menu-item-label-wrapper';

        var label = document.createElement('span');
        label.className = 'bubbler-menu-item-label';
        label.innerHTML = this.items[i].label;

        label_wrapper.appendChild(label);
        child.appendChild(label_wrapper);
        bubbler_wrapper.appendChild(child);
    }

    bubbler_wrapper.appendChild(menu_button);
    body.appendChild(bubbler_wrapper);
}