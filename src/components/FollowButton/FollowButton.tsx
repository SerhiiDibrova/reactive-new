package components.FollowButton;

import React, { useState } from 'react';

const FollowButton: React.FC = () => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowToggle = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <button onClick={handleFollowToggle}>
            {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
    );
};

export default FollowButton;