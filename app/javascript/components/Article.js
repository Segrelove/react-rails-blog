import React from "react"
import PropTypes from "prop-types"
import Timestamp from 'react-timestamp'

class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}
        </div>
        <div className="article-meta-details">
          <small>Created by: {this.props.user_name}, <Timestamp relative date={this.props.created_at}/>,
                last updated: <Timestamp relative date={this.props.updated_at}/></small>  
        </div>

      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  user_name: PropTypes.string,
  created_at: PropTypes.instanceOf(Date),
  updated_at: PropTypes.instanceOf(Date)
};
export default Article
