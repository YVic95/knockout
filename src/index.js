function viewModel() {
    this.myText = ko.observable ('Hello world!');
    this.myHtml = ko.observable('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>');
    this.items = ko.observableArray();
    const obj1 = {a: 1, b: 2};
    this.obj = ko.observable(obj1);
    this.isActive = ko.observable(false);

    setTimeout(() => {
        this.myText('Hello country!');
    }, 1000);

    this.onClick = function(viewModel, event) {
        this.items.push('Item');
        this.obj({...obj1, b: ++obj1.b});
        this.isActive(!this.isActive());
    }  
}

ko.applyBindings(new viewModel());



