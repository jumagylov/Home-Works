import CommentDate from './CommentDate'
import UserInfo from '../UserInfo/UserInfo';
import './Comment.css'
import CommentWrapper from '../../UI/CommentWrapper';

function Comment(props) {
	return (
		
		<div className='Comment'>
			<UserInfo author={props.author} />
			<CommentWrapper className='Text'>
			<div className='Comment-text'>{props.text}</div>
			<CommentDate date={props.date} />
			</CommentWrapper>
		</div>
	)
}
export default Comment
