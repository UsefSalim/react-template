import { useState, useCallback, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { notify } from '@sobrus-com/sobrus-design-system';
import { AuthContext } from 'Context';
import { catchFunction } from 'Helpers';
import API from 'Services/API';

export const useCrud = (dataFetching, url, name = '') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(0);
  const history = useHistory();
  const { setError: setAuthError } = useContext(AuthContext);
  const FetchPost = useCallback(
    async (signal) => {
      try {
        setLoading(true);
        const res = await API.post(`${url}`, dataFetching.formData, {
          params: dataFetching.queryState,
          signal,
        });
        setData(res?.data[name] || res?.data);
        setPages(Math.ceil(res?.data?.total / dataFetching.queryState?.limit));
        setLoading(false);
      } catch (error) {
        catchFunction(error, setAuthError, setLoading);
      }
    },
    [name, dataFetching, url, setAuthError],
  );
  const FetchGet = useCallback(
    async (signal) => {
      try {
        setLoading(true);
        const res = await API.get(`${url}`, {
          params: dataFetching.queryState,
          signal,
        });
        setData(res?.data[name] || res?.data);
        setPages(Math.ceil(res?.data?.total / dataFetching.queryState?.limit));
        setLoading(false);
      } catch (error) {
        catchFunction(error, setAuthError, setLoading);
      }
    },
    [name, dataFetching, url, setAuthError],
  );
  const Add = async (url, formData, redirrectUrl = '', redirrect = false, message = '') => {
    try {
      setLoading(true);
      const { data } = await API.post(`${url}`, formData);
      setLoading(false);
      history.push({
        pathname: redirrect || `${redirrectUrl}/${data?.id}`,
        state: { detail: 'success', action: message || 'ajouter', message },
      });
    } catch (error) {
      catchFunction(error, setAuthError, setLoading);
    }
  };
  const Update = async (url, formData, redirrectUrl = '', redirrect = false, message = '') => {
    try {
      setLoading(true);
      const { data } = await API.patch(`${url}`, formData);
      history.push({
        pathname: redirrect || `${redirrectUrl}/${data?.id}`,
        state: { detail: 'success', action: 'modifié', message },
      });
      setLoading(false);
    } catch (error) {
      catchFunction(error, setAuthError, setLoading);
    }
  };
  const Delete = async (url, id, msgData, setLoading, setDeleteOpen) => {
    try {
      setLoading(id);
      await API.delete(`${url}/${id}`);
      const newData = data.filter((d) => d.id !== id);
      setData(newData);
      notify({
        type: 'success',
        msg: `${msgData} supprimer avec succès`,
        delay: 5000,
      });
      setDeleteOpen(false);
      setLoading(false);
    } catch (error) {
      catchFunction(error, setAuthError, setLoading);
    }
  };
  return {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    pages,
    setPages,
    FetchGet,
    FetchPost,
    Delete,
    Update,
    Add,
  };
};

export const useGetOne = (url, propsId = null) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { setError: setAuthError } = useContext(AuthContext);
  const fetch = useCallback(
    async (signal) => {
      try {
        setLoading(true);
        if (propsId || id) {
          const res = await API.get(`${url}`, { signal });
          setData(res?.data);
        }
        setLoading(false);
      } catch (error) {
        catchFunction(error, setAuthError, setLoading);
      }
    },
    [url, id, propsId, setAuthError],
  );

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(signal);
    return () => controller.abort();
  }, [fetch]);
  return {
    data,
    loading,
    setLoading,
    setData,
  };
};
