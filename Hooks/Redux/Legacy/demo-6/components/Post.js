import { useState } from 'react';
import { connect } from 'react-redux';

import { selectPost } from '../store/actions/selected-posts';

const Post = ({ post, selectPost }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    selectPost(post.id, e.target.checked);
  };

  return (
    <div>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      {post.title}
    </div>
  );
};

export default connect(null, { selectPost })(Post);
