import React from 'react';
import { useNavigate } from 'react-router-dom';
 
 const TasksPage = ()=>{
    const navigate = useNavigate();

    // Cuando quieras realizar una redirección con reemplazo, utiliza la función navigate con la opción "replace".
    const handleRedireccion = () => {
      navigate('/nueva-ruta', { replace: true });
    };
  
    return(
          <div>
            <button onClick={handleRedireccion}>Redirigir</button>
            <img src="../public/svg.svg" alt="" />
          </div>

    )
 }

 export default TasksPage;