import { DescriptionCard, IconButton } from "@architecture-it/stylesystem";
import { faUserCircle } from "@fortawesome/pro-light-svg-icons";
import { faCheckDouble } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { getPedido } from "api/pedidoApi";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";

const Buscador = () => {
  const isLoadingPost = useAppSelector((state: RootState) => state.pedido.isLoading);
  const dataPost = useAppSelector((state: RootState) => state.pedido.data);
  const errorPost = useAppSelector((state: RootState) => state.pedido.error);
  const dispatch = useAppDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getPedido("4ff79651-9707-42b5-a2eb-c8fdbe2cc616"));
  }, []);

  return (
    <Fragment>
      <Container maxWidth="lg">
        {/*
        <DescriptionCard
          description={"Cuenta Corriente " + dataPost.cuentaCorriente}
          imageProps={{
            alt: "Pedido",
            height: 300,
            src: "https://a.storyblok.com/f/63950/500x200/700ea7d363/microsoftteams-image-9.png",
            width: 300,
          }}
          onClick={() => {}}
          redirectText={dataPost.cuando}
          subtitle={"Estado " + dataPost.estadoDelPedido}
          title={"#" + dataPost.numeroDePedido.toString()}
          url="/"
        />
         */}
        <Paper
          elevation={3}
          sx={{
            color: "#666666",
            fontWeight: "bold",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={6}>
              Pedido
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                alignItems: "right",
                alignContent: "right",
                display: "flex",
                justifyContent: "right",
              }}
            >
              {"#" + dataPost.numeroDePedido}
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  backgroundColor: "#FFC350",
                }}
              >
                <Stack>
                  <Box
                    sx={{
                      width: 70,
                      borderRadius: "50%",
                      height: 70,
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <FontAwesomeIcon icon={faCheckDouble} size="2x" />
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      marginTop: "5px",
                      color: "white",
                    }}
                  >
                    {dataPost.estadoDelPedido}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={6}>
              {"Cuenta Corriente " + dataPost.cuentaCorriente}
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                alignItems: "right",
                alignContent: "right",
                display: "flex",
                justifyContent: "right",
              }}
            >
              {dataPost.cuando}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default Buscador;
