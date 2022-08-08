import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function startLoader() {
  Loading.dots({
    svgColor: '#2da8d8ff',
    backgroundColor: 'rgba(0,0,0,0.8)',
    svgSize: '100px',
  });
}

export function stopLoader() {
  Loading.remove(300);
}
