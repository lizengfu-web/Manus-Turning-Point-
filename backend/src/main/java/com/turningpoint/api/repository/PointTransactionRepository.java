package com.turningpoint.api.repository;

import com.turningpoint.api.entity.PointTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
import com.turningpoint.api.entity.User;
import java.util.List;

public interface PointTransactionRepository extends JpaRepository<PointTransaction, Long> {
    List<PointTransaction> findByUserOrderByCreatedAtDesc(User user);
}
}
