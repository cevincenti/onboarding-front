import { FormData } from "components/PedidoForm";
import { postPedidoRequest, postPedidoSuccess, postPedidoFailure } from "redux/pedido/pedidoSlice";
import { instance, configuration } from "./ServiceBase";

//Obtener Pedido
const getPedido = (id: string) => {
  return instance
    .get(`${configuration.baseURL}${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

//Thunk Post Pedido
const postPedido = (objPedido: FormData) => {
  return async (dispatch: any) => {
    dispatch(postPedidoRequest());
    await instance
      .post(`${configuration.baseURL}`, objPedido)
      .then((response) => {
        if (response.status == 201) {
          dispatch(postPedidoSuccess(response.data));
        } else {
          dispatch(postPedidoFailure("Error al guardar el pedido"));
        }
      })
      .catch((error) => {
        dispatch(postPedidoFailure("Error al guardar el pedido"));
      });
  };
};

export { getPedido, postPedido };
