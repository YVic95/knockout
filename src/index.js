function viewModel() {
    this.myText = ko.observable ('Hello world!');
    this.myHtml = ko.observable('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>');
    this.items = ko.observableArray();

    setTimeout(() => {
        this.myText('Hello country!');
    }, 1000);

    this.onClick = function(viewModel, event) {
        this.items.push('Item');
    }
}

ko.applyBindings(new viewModel());
