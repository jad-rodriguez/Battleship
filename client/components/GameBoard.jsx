import React, { useState, useEffect } from "react"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import startingtiles from "../startingtiles"
import layout from "../layout"

function GameBoard () {
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()
    const [image4, setImage4] = useState()
    const [image5, setImage5] = useState()
    const [image6, setImage6] = useState()
    const [image7, setImage7] = useState()
    const [image8, setImage8] = useState()
    const [image9, setImage9] = useState()
    const [image10, setImage10] = useState()
    const [image11, setImage11] = useState()
    const [image12, setImage12] = useState()
    const [image13, setImage13] = useState()
    const [image14, setImage14] = useState()
    const [image15, setImage15] = useState()
    const [image16, setImage16] = useState()
    const [image17, setImage17] = useState()
    const [image18, setImage18] = useState()
    const [image19, setImage19] = useState()
    const [image20, setImage20] = useState()
    const [image21, setImage21] = useState()
    const [image22, setImage22] = useState()
    const [image23, setImage23] = useState()
    const [image24, setImage24] = useState()
    const [image25, setImage25] = useState()
    const [image26, setImage26] = useState()
    const [image27, setImage27] = useState()
    const [image28, setImage28] = useState()
    const [image29, setImage29] = useState()
    const [image30, setImage30] = useState()
    const [image31, setImage31] = useState()
    const [image32, setImage32] = useState()
    const [image33, setImage33] = useState()
    const [image34, setImage34] = useState()
    const [image35, setImage35] = useState()
    const [image36, setImage36] = useState()
    const [image37, setImage37] = useState()
    const [image38, setImage38] = useState()
    const [image39, setImage39] = useState()
    const [image40, setImage40] = useState()
    const [image41, setImage41] = useState()
    const [image42, setImage42] = useState()
    const [image43, setImage43] = useState()
    const [image44, setImage44] = useState()
    const [image45, setImage45] = useState()
    const [image46, setImage46] = useState()
    const [image47, setImage47] = useState()
    const [image48, setImage48] = useState()
    const [image49, setImage49] = useState()
    const [image50, setImage50] = useState()
    const [image51, setImage51] = useState()
    const [image52, setImage52] = useState()
    const [image53, setImage53] = useState()
    const [image54, setImage54] = useState()
    const [image55, setImage55] = useState()
    const [image56, setImage56] = useState()
    const [image57, setImage57] = useState()
    const [image58, setImage58] = useState()
    const [image59, setImage59] = useState()
    const [image60, setImage60] = useState()
    const [image61, setImage61] = useState()
    const [image62, setImage62] = useState()
    const [image63, setImage63] = useState()
    const [image64, setImage64] = useState()

    const [x, setX] = useState()
    const [y, setY] = useState()

    // Create state for battleships position
    const [battleship1, setBattleship1] = useState()
    const [battleship2, setBattleship2] = useState()

    // Hide the images at the start of the game
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        // access data to get links to the images
        const allImages = startingtiles.map(arr => arr.image)
    
        // shuffle the array
        const shuffleImages = array => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]
            }
            return array
        }
    
        // Get randomised result
        const randomised = shuffleImages(allImages)

        // Get index of Battleships
        const battleship1Index = randomised.indexOf('./images/Battleship1.png')
        const battleship2Index = randomised.indexOf('./images/Battleship2.png')

        console.log(battleship1Index)

        // Access layout data with X and Y key value pairs
        // const coordinateX = layout.map(item => item.x)
        // const coordinateY = layout.map(item => item.y)
      
        // Get object values x and y in the array with the 
        // matching index to battleship1 and battleship2
        setBattleship1(Object.values(layout[battleship1Index]))
        setBattleship2(Object.values(layout[battleship2Index]))

        // print values to check logic
        const b1 = Object.values(layout[battleship1Index])
        console.log(b1)
    
        // assign to each state
        setImage1(randomised[0])
        setImage2(randomised[1])
        setImage3(randomised[2])
        setImage4(randomised[3])
        setImage5(randomised[4])
        setImage6(randomised[5])
        setImage7(randomised[6])
        setImage8(randomised[7])
        setImage9(randomised[8])
        setImage10(randomised[9])
        setImage11(randomised[10])
        setImage12(randomised[11])
        setImage13(randomised[12])
        setImage14(randomised[13])
        setImage15(randomised[14])
        setImage16(randomised[15])
        setImage17(randomised[16])
        setImage18(randomised[17])
        setImage19(randomised[18])
        setImage20(randomised[19])
        setImage21(randomised[20])
        setImage22(randomised[21])
        setImage23(randomised[22])
        setImage24(randomised[23])
        setImage25(randomised[24])
        setImage26(randomised[25])
        setImage27(randomised[26])
        setImage28(randomised[27])
        setImage29(randomised[28])
        setImage30(randomised[29])
        setImage31(randomised[30])
        setImage32(randomised[31])
        setImage33(randomised[32])
        setImage34(randomised[33])
        setImage35(randomised[34])
        setImage36(randomised[35])
        setImage37(randomised[36])
        setImage38(randomised[37])
        setImage39(randomised[38])
        setImage40(randomised[39])
        setImage41(randomised[40])
        setImage42(randomised[41])
        setImage43(randomised[42])
        setImage44(randomised[43])
        setImage45(randomised[44])
        setImage46(randomised[44])
        setImage47(randomised[46])
        setImage48(randomised[47])
        setImage49(randomised[48])
        setImage50(randomised[49])
        setImage51(randomised[50])
        setImage52(randomised[51])
        setImage53(randomised[52])
        setImage54(randomised[53])
        setImage55(randomised[54])
        setImage56(randomised[55])
        setImage57(randomised[56])
        setImage58(randomised[57])
        setImage59(randomised[58])
        setImage60(randomised[59])
        setImage61(randomised[60])
        setImage62(randomised[61])
        setImage63(randomised[62])
        setImage64(randomised[63])
      }, [])


  
    const handleSubmit = (e) => {
        e.preventDefault()
        const distance = Math.abs(x-battleship1[0]) + Math.abs(y-battleship1[1])
        console.log(distance)
        if (distance === 1) {
            return alert("you're in the HOT zone")
        } else if (distance === 2) {
            return alert("you're in the HOT zone")
        } else if (distance === 3) {
            return alert("you're in the WARM zone")
        } else if (distance === 4) {
            return alert("you're in the WARM zone")
        } else {
           return alert("You're far away in the COLD")
        }
      }

     

    

    return (
        <>
        <Container fluid="md">
            <Row className="justify-content-md-center">
                <Col>
                     <Table bordered responsive="sm">
                        <tbody>
                            {/* <tr>
                                <td id="00"><img src={isHidden ? image1 : './images/navigate.png'} /></td>
                                <td id="01"><img src={isHidden ? image2 : './images/navigate.png'} /></td>
                                <td id="02"><img src={isHidden ? image3 : './images/navigate.png'} /></td>
                                <td id="03"><img src={isHidden ? image4 : './images/navigate.png'} /></td>
                                <td id="04"><img src={isHidden ? image5 : './images/navigate.png'} /></td>
                                <td id="05"><img src={isHidden ? image6 : './images/navigate.png'} /></td>
                                <td id="06"><img src={isHidden ? image7 : './images/navigate.png'} /></td>
                                <td id="07"><img src={isHidden ? image8 : './images/navigate.png'} /></td>
                            </tr> */}
                            <tr>
                                <td id="00"><img src={image1} /></td>
                                <td id="01"><img src={image2} /></td>
                                <td id="02"><img src={image3} /></td>
                                <td id="03"><img src={image4} /></td>
                                <td id="04"><img src={image5} /></td>
                                <td id="05"><img src={image6} /></td>
                                <td id="06"><img src={image7} /></td>
                                <td id="07"><img src={image8} /></td>
                            </tr>
                            <tr>
                                <td id="10"><img src={image9} /></td>
                                <td id="11"><img src={image10} /></td>
                                <td id="12"><img src={image11} /></td>
                                <td id="13"><img src={image12} /></td>
                                <td id="14"><img src={image13} /></td>
                                <td id="15"><img src={image14} /></td>
                                <td id="16"><img src={image15} /></td>
                                <td id="17"><img src={image16} /></td>
                            </tr>
                            <tr>
                                <td id="20"><img src={image17} /></td>
                                <td id="21"><img src={image18} /></td>
                                <td id="22"><img src={image19} /></td>
                                <td id="23"><img src={image20} /></td>
                                <td id="24"><img src={image21} /></td>
                                <td id="25"><img src={image22} /></td>
                                <td id="26"><img src={image23} /></td>
                                <td id="27"><img src={image24} /></td>
                            </tr>
                            <tr>
                                <td id="30"><img src={image25} /></td>
                                <td id="31"><img src={image26} /></td>
                                <td id="32"><img src={image27} /></td>
                                <td id="33"><img src={image28} /></td>
                                <td id="34"><img src={image29} /></td>
                                <td id="35"><img src={image30} /></td>
                                <td id="36"><img src={image31} /></td>
                                <td id="37"><img src={image32} /></td>
                            </tr>
                            <tr>
                                <td id="40"><img src={image33} /></td>
                                <td id="41"><img src={image34} /></td>
                                <td id="42"><img src={image35} /></td>
                                <td id="43"><img src={image36} /></td>
                                <td id="44"><img src={image37} /></td>
                                <td id="45"><img src={image38} /></td>
                                <td id="46"><img src={image39} /></td>
                                <td id="47"><img src={image40} /></td>
                            </tr>
                            <tr>
                                <td id="12"><img src={image41} /></td>
                                <td id="13"><img src={image42} /></td>
                                <td id="14"><img src={image43} /></td>
                                <td id="15"><img src={image44} /></td>
                                <td id="16"><img src={image45} /></td>
                                <td id="17"><img src={image46} /></td>
                                <td id="56"><img src={image47} /></td>
                                <td id="57"><img src={image48} /></td>
                            </tr>
                            <tr>
                                <td id="10"><img src={image49} /></td>
                                <td id="11"><img src={image50} /></td>
                                <td id="12"><img src={image51} /></td>
                                <td id="13"><img src={image52} /></td>
                                <td id="14"><img src={image53} /></td>
                                <td id="15"><img src={image54} /></td>
                                <td id="16"><img src={image55} /></td>
                                <td id="17"><img src={image56} /></td>
                            </tr>
                            <tr>
                                <td id="20"><img src={image57} /></td>
                                <td id="21"><img src={image58} /></td>
                                <td id="22"><img src={image59} /></td>
                                <td id="23"><img src={image60} /></td>
                                <td id="24"><img src={image61} /></td>
                                <td id="25"><img src={image62} /></td>
                                <td id="26"><img src={image63} /></td>
                                <td id="27"><img src={image64} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

        <Container>
            <center>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <Form.Group className="mb-3" controlId="coordinateX">
                            <Form.Label>Row</Form.Label>
                            <Form.Control type="number" placeholder="Input X Coordinate" onChange={e => setX(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col xs lg="2">
                        <Form.Group className="mb-3" controlId="coordinateY">
                            <Form.Label>Column</Form.Label>
                            <Form.Control type="number" placeholder="Input Y Coordinate" onChange={e => setY(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <Button className="mb-3" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            </center>
        </Container>
    </>
    )
  }
  
export default GameBoard


