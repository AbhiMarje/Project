import React from 'react'

const Form = () => {
  return (
    <div>
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="name" class="form-control" />
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Age</label>
            <input type="number" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Form