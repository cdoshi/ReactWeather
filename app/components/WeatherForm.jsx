var React = require('react'),
    WeatherForm = React.createClass({
      onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if(location.length > 0) {
          this.refs.location.value = '';
          this.props.onSearch(location);
        }

      },
      render: function() {
        return (
          <div>
            <form onSubmit={this.onFormSubmit}>
              <input type="search" name="place" ref="location" placeholder="Search weather by city" />
              <button type="submit" className="hollow button expanded"> Get Weather </button>
            </form>
          </div>
        );
      }
    });

module.exports = WeatherForm;
