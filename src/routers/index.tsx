import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { LinkLogs } from 'pages/ClickLogs/LinkLogs';
import { Home } from 'pages/Home';
import { MyPages } from 'pages/MyPages';
import { NotFound } from 'pages/NotFound';
import { Page } from 'pages/Page';
import { Signin } from 'pages/Signin';
import { Signup } from 'pages/Signup';

import { RouterGuard } from './RouterGuard';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RouterGuard type="private" />}>
        <Route path="/my-pages" element={<MyPages.List />} />
        <Route path="/my-pages/:path/analytics" element={<MyPages.Analytics />} />
        <Route path="/click-logs/:id" element={<LinkLogs />} />
        <Route path="/create-page" element={<MyPages.Create />} />
      </Route>

      <Route element={<RouterGuard type="strictly-public" />}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<RouterGuard type="public" />}>
        <Route path="/" element={<Home />} />
        <Route path="/:path" element={<Page />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </>,
  ),
);
