var React = require('react'),
    {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center"> Examples </h1>
      <p> Here are a few example locations to try out </p>
      <ol>
        <li>
          <Link to='/?location=Mumbai'>Mumbai, IN</Link>
        </li>
        <li>
          <Link to='/?location=Delhi'>Delhi, IN</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
