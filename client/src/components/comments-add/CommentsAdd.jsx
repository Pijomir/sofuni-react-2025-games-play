export default function CommentsAdd({
    email,
}) {
    const commentAction = (formData) => {
        const comment = formData.get('comment');
    };

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={commentAction}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
}