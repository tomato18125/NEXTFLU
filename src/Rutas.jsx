import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./Vistas/Principal";
import Detalle from "./Vistas/Detalle";
import Home from "./Vistas/Home"
import Registro from "./Vistas/Registro";
import RutasPrivadas from "./RutasPrivadas";
import RutaHome from "./RutaHome";
// import RutaRegistro from './RutaRegistro'

const Rutas = () => {


    
    return (
        <>
            <BrowserRouter>
                  <Routes>
                  {/* <Route path="/" element={<Home />}></Route> */}
                        <Route path="/" element={
                              <RutaHome>
                                    <Home />
                              </RutaHome>}>
                        </Route>
                        
                        <Route path="/Registro" element={<Registro />}></Route>
            
                        <Route path="*" element={
                              <RutasPrivadas>
                                    <Routes>
                                          <Route path="/Principal" element={<Principal />}></Route>
                                          <Route path="/Detalle" element={<Detalle />}></Route>
                                    </Routes>
                              </RutasPrivadas>}>
                        </Route>
            
                  </Routes>
                  
            </BrowserRouter>



            {/* <BrowserRouter>
                  <Routes>
                   <Route path="/" element={<Home />}></Route>
                        <Route path="/Principal" element={<Principal />}></Route>
                        <Route path="/Detalle" element={<Detalle />}></Route>
                        <Route path="/Registro" element={<Registro />}></Route>
                      
                        
                        
            
                      
            
                  </Routes>
                  
            </BrowserRouter> */}



        </>
      );
    };
    export default Rutas;




