import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/Newsletter"
import shirt2 from '../img/shirt2.png'
import {NavLink} from "react-router-dom"

const Container = styled.div`
   
`
const Wrapper = styled.div`
    padding:20px;
    display:flex;
`

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${(props)=>props.type === "filled" && "none"};
    background-color:${(props)=>props.type === "filled" ? "black" : "transparent"};
    color:${(props)=>props.type === "filled" && "white"};
`
const ImgContainer = styled.div`
    flex:1;
    padding:0px 50px;
`
const Image = styled.img`
    // width:100%;
    // height:90vh;
    // object-fit:cover;
`
const InfoContainer = styled.div`
    flex:1;
`
const Title = styled.h1`
    font-weight:200;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:50%;
    margin:30px 0px;
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
    `
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;border-radius:10px;
    border: 1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    backgorund-color:white;
    cursor:pointer;

    font-weight:500;

    &:hover{
        background-color:#f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Top>
                    <NavLink exact to='/productlist'>
                        <TopButton>CONTINUE YOUR SHOPPING</TopButton>
                    </NavLink>
                </Top>
                <ImgContainer>
                    <Image src={shirt2}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsam porro tenetur rerum tempore sed excepturi repellendus necessitatibus consectetur repudiandae fugit officiis ullam sit obcaecati, quod veritatis labore eaque quos!</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <NavLink exact to='/cart'> 
                        <Button>ADD TO CART</Button>
                        </NavLink>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
