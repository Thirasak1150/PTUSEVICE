import React from 'react'

function Editprofile() {
    const [username, setUsername] = useState(data.username);
    const [fname, setFname] = useState(data.fname);
    const [surname, setSurname] = useState(data.surname);
    const [tel_member, setTel] = useState(data.tel_member);
    const [password, setPassword] = useState(data.password);


  return (
    <>
    {data.map((item, index) => {
            return (
                <div className="big">
     
                <div className="ct">
                  <div className="ct2">
                    <form>
                      <div className="mb-3">
                        <label  className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="username"
                          value={data.username}
                          required
                          onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label  className="form-label">
                          ชื่อจริง
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={data.fname}
                          onChange={(event) => {
                            setFname(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label  className="form-label">
                          นามสกุล
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={data.surname}
                          onChange={(event) => {
                            setSurname(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label  className="form-label">
                          เบอร์โทรศัพท์
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          value={data.tel_member}
                          onChange={(event) => {
                            setTel(event.target.value);
                          }}
                        />
                      </div>
                   
                 
                      <div className="submib">
                        <button type="submit" className="bt " onClick={addMember}>
                          submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  )
}

export default Editprofile