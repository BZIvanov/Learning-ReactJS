import { useState, useEffect, useRef, useCallback } from "react";

import { getUsers } from "./api";
import styles from "./App.module.css";

type UserShape = {
  cell: string;
  email: string;
};

const App = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<Array<UserShape>>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const loadUsers = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newUsers = await getUsers(page);
      if (newUsers.length === 0) {
        setHasMore(false);
      } else {
        setUsers((prev) => [...prev, ...newUsers]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadUsers();
        }
      },
      { rootMargin: "200px" } // Preload before hitting the bottom
    );

    const sentinel = sentinelRef.current;
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [loadUsers, hasMore]);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Infinite Users</h1>

      <div className={styles.userList}>
        {users.map((user) => (
          <div key={user.cell} className={styles.userCell}>
            {user.email}
          </div>
        ))}
        <div ref={sentinelRef} />
      </div>

      {loading && (
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <span>Loading...</span>
        </div>
      )}

      {!hasMore && (
        <div className={styles.end}>You've reached the end of the list.</div>
      )}
    </div>
  );
};

export default App;
