import { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import { useAppSelector, useAppDispatch } from "../../../../app/hooks/useRedux";
import SkeletonCards from "../../../shared/components/Skeletons/SkeletonCards";

import { useGetHeroesQuery } from "../slices/heroesApiSlice";
import {
  editedHeroesList,
  heroesList,
  resetHeroesList,
  setHeroesList,
} from "../slices/heroesSlice";
import RenderHeroeCard from "./RenderHeroeCard";
import { IconButton } from "@mui/material";

const HeroesList = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(20);
  const [search, setSearch] = useState("");
  const [searchBounce, setSearchBounce] = useState("");

  const currentHeroesList = useAppSelector(heroesList);
  const currentEditedHeroesList = useAppSelector(editedHeroesList);

  const { data, isLoading, isFetching, refetch } = useGetHeroesQuery({
    offset,
    perPage: perPage,
    ...(search && { search }),
  });

  useEffect(() => {
    // console.log(data?.data.results);
    if (offset === 0) dispatch(resetHeroesList());
    const regexTest = new RegExp(search.toLowerCase() + ".*$");
    const datafetch =
      search && currentEditedHeroesList
        ? [
            ...Object.values(currentEditedHeroesList).filter((dt) =>
              dt.newName.match(regexTest)
            ),
            ...data?.data.results!,
          ]
        : data?.data.results!;

    if (datafetch && !isFetching) dispatch(setHeroesList(datafetch));
  }, [
    data?.data.results,
    dispatch,
    offset,
    currentEditedHeroesList,
    isFetching,
    search,
  ]);

  const fetchMoreData = () => {
    setOffset(currentHeroesList.length);
  };

  const goToCharacters = (id: string) => {
    navigate(id);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(0);
      setSearch(searchBounce || "");
    }, 400);

    return () => clearTimeout(timer);
  }, [searchBounce]);
  // const CardHeroes = <RenderHeroeCard goToCharacters={goToCharacters} />;

  const renderHeroes = () => {
    return (
      <>
        {currentHeroesList.map((props, i) => (
          <RenderHeroeCard
            key={`heroe-card-father-${i}`}
            {...props}
            goToCharacters={goToCharacters}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={searchBounce}
            onChange={(target) => setSearchBounce(target.currentTarget.value)}
            placeholder="Buscar Héroe"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => setSearchBounce("")}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          {data && !isLoading ? (
            <InfiniteScroll
              dataLength={currentHeroesList.length}
              next={fetchMoreData}
              scrollThreshold={0.9}
              hasMore={data?.data.total > offset + currentHeroesList.length}
              loader={isFetching && <SkeletonCards />}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>No hay mas registros que mostrar</b>
                </p>
              }
              // below props only if you need pull down functionality
              refreshFunction={refetch}
              pullDownToRefresh
              pullDownToRefreshThreshold={50}
              pullDownToRefreshContent={
                <h3 style={{ textAlign: "center" }}>
                  &#8595;Arrastrar hacia abajo para refrescar
                </h3>
              }
              releaseToRefreshContent={
                <h3 style={{ textAlign: "center" }}>
                  &#8593; Soltar para refrescar
                </h3>
              }
            >
              <Grid
                container
                justifyContent="center"
                // alignContent="stretch"
                spacing={2}
              >
                {renderHeroes()}
              </Grid>
            </InfiniteScroll>
          ) : (
            <SkeletonCards />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default HeroesList;
