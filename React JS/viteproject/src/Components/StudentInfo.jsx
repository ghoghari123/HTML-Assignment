import React, { useState } from 'react'

function StudentInfo() {
    const [studentlist, setStudentList] = useState([])
    const [student, setStudent] = useState({})

    const handlChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value })
    }
    const delStudent = (id) => {
        let newArray = studentlist.filter((index, i) => {
            if (id != i) {
                return index
            }
        })
        setStudentList(newArray)
    }
    const handleClick = (e) => {
        e.preventDefault();
        console.log(student);
        setStudentList([...studentlist, student])
        console.log(studentlist);
    }

    return (
        <div>
            <div class="container mt-5">

                <div class="card shadow">
                    <div class="card-header bg-primary text-white">
                        <h4>Student Form</h4>
                    </div>

                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" placeholder="Enter Name" name='sname' onChange={handlChange} />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" placeholder="Enter Email" name='email' onChange={handlChange} />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Contact</label>
                                <input type="text" class="form-control" placeholder="Enter Contact Number" name='contact' onChange={handlChange} />
                            </div>

                            <button type="submit" class="btn btn-success" onClick={handleClick}>
                                <i class="bi bi-plus-circle"></i> Add Student
                            </button>
                        </form>
                    </div>
                </div>


                <div class="card mt-4 shadow">
                    <div class="card-header bg-dark text-white">
                        <h5>Student List</h5>
                    </div>

                    <div class="card-body">
                        <table class="table table-bordered table-hover">
                            <thead class="table-secondary">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    studentlist && studentlist.map((index, i) => (
                                        <tr key={i}>
                                            <td>{index.sname}</td>
                                            <td>{index.email}</td>
                                            <td>{index.contact}</td>
                                            <td>
                                                <button class="btn btn-warning btn-sm">
                                                    <i class="bi bi-pencil-square"></i> Update
                                                </button>

                                                <button class="btn btn-danger btn-sm" onClick={() => { delStudent(i) }}>
                                                    <i class="bi bi-trash"></i> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StudentInfo

