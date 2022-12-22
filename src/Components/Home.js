import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [empty, setEmpty] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(data => {
                setUsers(data.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className='d-flex align-items-center justify-content-center my-5'>
                <Spinner animation="border" variant="info" />
            </div>
        )
    }

    return (
        <div>
            <Container className=''>
                <Row className='my-5'>
                    <Col className='p-50'>
                        <h3 className='bg-info border rounded text-white text-center py-2'>User List</h3>
                        {
                            users.map((user) => <Link
                                key={user.id}
                                to={`/details/${user.id}`}
                                className='text-decoration-none text-black'
                                onClick={() => setEmpty(false)}
                            >
                                <div

                                    className='border rounded my-2'
                                // onClick={() => userDetails(user.id)}
                                >
                                    <div className="d-flex align-items-center p-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='' style={{
                                            width: '40px',
                                            height: '40px'
                                        }} alt="" />
                                        <p className='mb-0 ms-2 fw-bold'>{user.profile.username}</p>
                                    </div>
                                </div>
                            </Link>)
                        }

                    </Col>
                    <Col className='p-50'>
                        <h3 className='bg-info border rounded text-white text-center py-2'>User Details</h3>
                        {
                            empty ? <div className='d-flex align-items-center justify-content-center h-100'>
                                <h2 className='text-muted'>Please select a user</h2>
                            </div>
                                :
                                <Outlet></Outlet>
                        }
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Home;