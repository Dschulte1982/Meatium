exports.getUserToken = async (user) => {
    return await jwt.sign(
        { id: user.id, username: user.username },
        secret,
        { expiresIn }
    );
};
