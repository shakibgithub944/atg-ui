import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(data => {
                setUsers(data.data)
                setLoading(false)
            })
    }, [])

    // const userDetails = (id) => {
    //     setLoading(true)
    //     fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             const result = data.filter(user => user.id === id);
    //             // console.log(result[0]);
    //             setUser(result[0])
    //             setLoading(false)

    //         })
    // }

    if (loading) {
        return (
            <div className='d-flex align-items-center justify-content-center my-5'>
                <Spinner animation="border" variant="info" />
            </div>
        )
    }

    console.log(user);

    return (
        <div>
            <Container className=''>
                <Row className='my-5'>
                    <Col className='p-50'>
                        <h3 className='bg-info text-white text-center py-2'>User List</h3>
                        {
                            users.map((user) => <div
                                key={user.id}
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
                            </div>)
                        }

                    </Col>
                    <Col className='p-50'>
                        <h3 className='bg-info text-white text-center py-2'>User Details</h3>
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Home;