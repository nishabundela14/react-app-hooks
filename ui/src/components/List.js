import React from 'react';
import '../App.css';
import {
    Link
  } from "react-router-dom";

const List = ({posts, loading, sortByText, sortByNum}) => {
    if (loading) {
        return <h2>Loading....</h2>;
    }
    return <table>
        <thead>
            <tr>
                <th>
                <a href="#" onClick={() => sortByNum('id')}>Ship id#</a>
                </th>
                <th>
                <a href="#"onClick={() => sortByText('name')}>Name</a>
                </th>
                <th>
                Total
                </th>
                <th>
                Origin
                </th>
                <th>
                Status
                </th>
            </tr>
        </thead>
        <tbody>
            {
            posts.map((post,index) => (
                <tr key={post.id}>
                <td >
                    {post.id}
                </td>
                <td>
                  <Link to={`/${post.id}`}>{post.name}</Link>
                </td>
                <td>
                {post.total}
              </td>
                <td>
                {post.origin}
              </td>
              <td>
              {post.status}
            </td>
            </tr>
            ))
            }
        </tbody>
    </table>
}

export default List
