import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getUserThunk} from '../../../redux/actions/userActions';
import ButtonAccount from '../../UI/ButtonAccount/ButtonAccount';

function User() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const user = useSelector((state) => state.statsUser);

    useEffect(() => {
        dispatch(getUserThunk(id));
    }, []);

    return (
        <>
            {user.user && (
                <div className="px-3 py-4 mb-3 bg-light rounded">
                    <h1 className="text-center">
                        {user.user.name}
                        {' '}
                        {user.user.surname}
                    </h1>
                    <p className="text-center"/>
                    <div className="d-flex justify-content-center mt-4">
                        <div className="d-flex flex-column mx-3 text-center">
                            <div className="h3 text-black-50">{user.user.CVComms.length}</div>
                            <div className="text-muted">комментарии</div>
                        </div>
                    </div>
                </div>
            )}
            <ButtonAccount userPage={user?.user} roomId={user.user?.id}/>
        </>
    );
}

export default User;
