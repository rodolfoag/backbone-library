var app = app || {};

app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template( $( '#bookTemplate' ).html() ),

    events: {
        'click .delete': 'deleteBook'
    },

    render: function () {
        // this.el is what we define in tagName. Use $el to get access to
        // jQuery html() function
        this.$el.html( this.template( this.model.toJSON() ) );

        // Always return this in Backbone.View.render to allow chaining
        return this;
    },

    deleteBook: function () {
        // Delete model
        this.model.destroy();

        // Delete view
        this.remove();
    }
});