import React,{useState} from 'react';
import {Container,Form,Button,Card} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
const Profilesetup=()=>{
    const navigate=useNavigate();
    const[formData,setformData]=useState({
        year:'',
        branch:'',
        goal:''
    });
    const handleChange=(e)=>{
        setformData(
            {
             ...formData,
                [e.target.name]:e.target.value
            }

        );
    };
    const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Profile data:", formData);

  if (formData.goal === "not_decided") {
    navigate("/psychometric-test");
  } else {
    navigate("/Dashboard");
  }
};
return(
        <Container className="py-5" style={{ maxWidth: '600px' }}>
            <Card className="p-4 shadow">
                <h3 className="text-center mb-4">
          Complete Your Profile
        </h3>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                {/* year*/ }
                <Form.Label>Academic year</Form.Label>
                <Form.Select name="year"
                value={formData.year}
                onChange={handleChange}
                required>
                    <option value="">Select year</option>
                    <option>1st year</option>
                    <option>2nd year</option>
                    <option>3rd year</option>
                    <option>4th year</option>

                </Form.Select>

            </Form.Group>
            {/*branch */}
            <Form.Group className="mb-3">
                <Form.Label>Branch</Form.Label>
                <Form.Select name="branch"
                value={formData.branch}
                onChange={handleChange}
                required>
                     <option value="">Select Branch</option>
              <option>Computer</option>
              <option>IT</option>
              <option>ENTC</option>
              <option>Mechanical</option>
              <option>Civil</option>
              <option>Electrical</option>
                </Form.Select>
            </Form.Group>
             {/* Goal */}
          <Form.Group className="mb-4">
            <Form.Label>Career Goal</Form.Label>
           <Form.Select
  name="goal"
  value={formData.goal}
  onChange={handleChange}
  required
>
  <option value="">Select Goal</option>
  <option value="Software Engineer">Software Engineer</option>
  <option value="Data Scientist">Data Scientist</option>
  <option value="Web Developer">Web Developer</option>
  <option value="Startup">Startup</option>
  <option value="Higher Studies">Higher Studies</option>
  <option value="not_decided">Not Decided</option>
</Form.Select>
          </Form.Group>
           <Button type="submit" className="w-100">
            Continue
          </Button>
        </Form>
            </Card>

    </Container>
);
};
export default Profilesetup;