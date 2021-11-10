import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { languages } from "../../constants/actionTypes";
import Text from "../../language/text";
import {
  changeToEnglish,
  changeToUzbek,
} from "../../redux/modules/language/languageAction";
import {
  Card,
  Cards,
  Card1,
  Container,
  Logo,
  NavbarWrapper,
  Navs,
  Select,
  Title,
} from "./style";

function Navbar() {
  const dispatch = useDispatch();

  const changeLanguage = (e) => {
    if (e.target.value === "uz") {
      dispatch(changeToUzbek());
    } else if ((e.target.value = "en")) {
      dispatch(changeToEnglish());
    }
  };

  const language = useSelector((state) => state.language);

  return (
    <>
      <NavbarWrapper>
        <Container>
          <Logo>moodle</Logo>
          <Navs>
            <li>
              <Text id="about" />
            </li>
            <li>
              <Text id="service" />
            </li>
            <li>
              <Text id="contactUs" />
            </li>
            <li>
              <Text id="service" />
            </li>
            <li>{language}</li>
          </Navs>
          <Select onChange={changeLanguage}>
            <option value="uzbek"> Uzbek</option>
            <option value="english"> English</option>
          </Select>
        </Container>
      </NavbarWrapper>
      <Card>
        <Cards>
          <h1><Text id="title" /></h1>  
            <br />
           <h2><Text id="info" /></h2> 
           <button><Text id="discover" /></button>

        </Cards>
        <Card1>
        <img width="390" height="370" src="https://moodle.com/wp-content/uploads/2020/03/Donate-globe-2.jpg" class="vc_single_image-img attachment-large" alt="Moodle globe" loading="lazy" srcset="https://moodle.com/wp-content/uploads/2020/03/Donate-globe-2.jpg 300w, https://moodle.com/wp-content/uploads/2020/03/Donate-globe-2.jpg 158w, https://moodle.com/wp-content/uploads/2020/03/Donate-globe-2.jpg 81w, https://moodle.com/wp-content/uploads/2020/03/Donate-globe-2.jpg 390w" sizes="(max-width: 390px) 100vw, 390px"/>
        </Card1>
      </Card>
    </>
  );
}

export default Navbar;
