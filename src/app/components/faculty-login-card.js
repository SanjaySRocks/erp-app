import React from 'react'

const FacultyLoginCard = () => {
    return (
        <>
            <div className="card">

                <div className="card-header">
                    Login As Teacher
                </div>

                <div className="card-body">

                    <form className="pt-3">
                        <div class="mb-3">
                            <label class="form-label">Employee Id</label>
                            <input type="text" class="form-control"></input>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control"></input>
                        </div>
                        <button type="submit" class="btn btn-primary float-end">Login</button>
                    </form>


                </div>

            </div>
        </>
    )
}

export default FacultyLoginCard