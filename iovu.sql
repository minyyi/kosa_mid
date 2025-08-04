-- db ������ ���� �ο�

create user iovu identified by iovu;
grant connect, resource to iovu;

-- ������ (������ ���� ? NOCACHE�� ���)
CREATE SEQUENCE report_id_seq         NOCACHE;
CREATE SEQUENCE report_detail_id_seq  NOCACHE;
CREATE SEQUENCE consulting_id_seq     NOCACHE;
CREATE SEQUENCE domain_link_id_seq    NOCACHE;
CREATE SEQUENCE link_list_id_seq      NOCACHE;
CREATE SEQUENCE dashboard_id_seq      NOCACHE;

-- ���̺�
/* 3-1. REPORT_LIST */
CREATE TABLE report_list (
    report_id     NUMBER         PRIMARY KEY,
    keyword       VARCHAR2(120)  NOT NULL,
    status        VARCHAR2(10)   DEFAULT 'CREATING'
                   CHECK (status IN ('CREATING','READY','FAILED')),
    data_volume   NUMBER         DEFAULT 0,
    created_at    TIMESTAMP      DEFAULT SYSTIMESTAMP,
    updated_at    TIMESTAMP
);

/* 3-2. REPORT_DETAIL */
CREATE TABLE report_detail (
    report_detail_id NUMBER        PRIMARY KEY,
    report_id        NUMBER NOT NULL
        REFERENCES report_list(report_id) ON DELETE CASCADE,
    ai_type          VARCHAR2(10)
        CHECK (ai_type IN ('GPT','GOOGLE')),
    created_at       TIMESTAMP     DEFAULT SYSTIMESTAMP,
    json_data        CLOB
);
CREATE INDEX ix_report_detail_rid ON report_detail(report_id);

/* 3-3. CONSULTING */
CREATE TABLE consulting (
    consulting_id    NUMBER        PRIMARY KEY,
    report_detail_id NUMBER NOT NULL
        REFERENCES report_detail(report_detail_id) ON DELETE CASCADE,
    result           VARCHAR2(500),
    consulting       VARCHAR2(500)
);
CREATE INDEX ix_consulting_rid ON consulting(report_detail_id);

/* 3-4. DOMAIN_LINK */
CREATE TABLE domain_link (
    domain_link_id   NUMBER        PRIMARY KEY,
    report_detail_id NUMBER NOT NULL
        REFERENCES report_detail(report_detail_id) ON DELETE CASCADE,
    domain_name      VARCHAR2(50),
    rate             NUMBER(5,1),
    chatgpt          NUMBER(5,0),
    gemini           NUMBER(5,0),
    category         VARCHAR2(50)
);
CREATE INDEX ix_domain_link_rid ON domain_link(report_detail_id);

/* 3-5. LINK_LIST */
CREATE TABLE link_list (
    link_id        NUMBER        PRIMARY KEY,
    domain_link_id NUMBER NOT NULL
        REFERENCES domain_link(domain_link_id) ON DELETE CASCADE,
    link           VARCHAR2(500)
);
CREATE INDEX ix_link_list_dlid ON link_list(domain_link_id);

/* 3-6. DASHBOARD */
CREATE TABLE dashboard (
    dashboard_id     NUMBER      PRIMARY KEY,
    report_detail_id NUMBER NOT NULL
        REFERENCES report_detail(report_detail_id) ON DELETE CASCADE,
    result_summary   NUMBER(5,0),
    brand_rate1      NUMBER(5,1),
    brand_rate2      NUMBER(5,0),
    brand_rank       NUMBER,
    domain_rate1     NUMBER(5,1),
    domain_rate2     NUMBER(5,0),
    brand_mention    NUMBER
);
CREATE INDEX ix_dashboard_rid ON dashboard(report_detail_id);

/* ========== �� ���� #1 ================================= */
INSERT INTO report_list (report_id, keyword, status, data_volume)
VALUES (report_id_seq.NEXTVAL, 'AI �м� �˻�', 'READY', 1420);

INSERT INTO report_detail (report_detail_id, report_id, ai_type, json_data)
VALUES (report_detail_id_seq.NEXTVAL, report_id_seq.CURRVAL,
        'GPT', '{"topic":"GenAI","cnt":120}');

INSERT INTO consulting (consulting_id, report_detail_id, result, consulting)
VALUES (consulting_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        '�Ϸ�', 'GPT-4 �м� ��� ��� ������');

INSERT INTO domain_link (domain_link_id, report_detail_id,
                         domain_name,  rate, chatgpt, gemini, category)
VALUES (domain_link_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        'lumino.co.kr', 4.7, 90, 88, '�м�');

INSERT INTO link_list (link_id, domain_link_id, link)
VALUES (link_list_id_seq.NEXTVAL, domain_link_id_seq.CURRVAL,
        'https://lumino.co.kr/product/123');

INSERT INTO dashboard (dashboard_id, report_detail_id,
                       result_summary, brand_rate1, brand_rate2, brand_rank,
                       domain_rate1, domain_rate2, brand_mention)
VALUES (dashboard_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        96, 87.5, 83, 1, 90.2, 88, 52);

/* ========== �� ���� #2 ================================= */
INSERT INTO report_list (report_id, keyword, status, data_volume)
VALUES (report_id_seq.NEXTVAL, 'ģȯ�� ���� Ʈ����', 'CREATING', 980);

INSERT INTO report_detail (report_detail_id, report_id, ai_type, json_data)
VALUES (report_detail_id_seq.NEXTVAL, report_id_seq.CURRVAL,
        'GOOGLE', '{"topic":"EcoTextile","cnt":47}');

INSERT INTO consulting (consulting_id, report_detail_id, result, consulting)
VALUES (consulting_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        '������', 'Google ��� �ݿ� KPI ����');

INSERT INTO domain_link (domain_link_id, report_detail_id,
                         domain_name, rate, chatgpt, gemini, category)
VALUES (domain_link_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        'ecotexnews.net', 2.8, 70, 68, 'ģȯ��');

INSERT INTO link_list (link_id, domain_link_id, link)
VALUES (link_list_id_seq.NEXTVAL, domain_link_id_seq.CURRVAL,
        'https://ecotexnews.net/article/green-fabric');

INSERT INTO dashboard (dashboard_id, report_detail_id,
                       result_summary, brand_rate1, brand_rate2, brand_rank,
                       domain_rate1, domain_rate2, brand_mention)
VALUES (dashboard_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        82, 65.5, 62, 3, 72.1, 69, 18);

/* ========== �� ���� #3 ================================= */
INSERT INTO report_list (report_id, keyword, status, data_volume)
VALUES (report_id_seq.NEXTVAL, '��Ÿ���� �����м�', 'FAILED', 0);

INSERT INTO report_detail (report_detail_id, report_id, ai_type, json_data)
VALUES (report_detail_id_seq.NEXTVAL, report_id_seq.CURRVAL,
        'GPT', '{"topic":"Metaverse","cnt":0}');

INSERT INTO consulting (consulting_id, report_detail_id, result, consulting)
VALUES (consulting_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        '����', '������ ���� ������ �м� �Ұ�');

INSERT INTO domain_link (domain_link_id, report_detail_id,
                         domain_name, rate, chatgpt, gemini, category)
VALUES (domain_link_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        'virtualstyle.io', 1.2, 15, 12, '��Ÿ����');

INSERT INTO link_list (link_id, domain_link_id, link)
VALUES (link_list_id_seq.NEXTVAL, domain_link_id_seq.CURRVAL,
        'https://virtualstyle.io/error-log');

INSERT INTO dashboard (dashboard_id, report_detail_id,
                       result_summary, brand_rate1, brand_rate2, brand_rank,
                       domain_rate1, domain_rate2, brand_mention)
VALUES (dashboard_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        10, 5.5, 4, NULL, 6.0, 5, 3);

/* ========== �� ���� #4 ================================= */
INSERT INTO report_list (report_id, keyword, status, data_volume)
VALUES (report_id_seq.NEXTVAL, '���������� ����', 'READY', 2040);

INSERT INTO report_detail (report_detail_id, report_id, ai_type, json_data)
VALUES (report_detail_id_seq.NEXTVAL, report_id_seq.CURRVAL,
        'GOOGLE', '{"topic":"SportsWear","cnt":210}');

INSERT INTO consulting (consulting_id, report_detail_id, result, consulting)
VALUES (consulting_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        '�Ϸ�', '�귣�� ���� ��� ���� ����');

INSERT INTO domain_link (domain_link_id, report_detail_id,
                         domain_name, rate, chatgpt, gemini, category)
VALUES (domain_link_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        'sportyfit.com', 3.9, 78, 74, '������');

INSERT INTO link_list (link_id, domain_link_id, link)
VALUES (link_list_id_seq.NEXTVAL, domain_link_id_seq.CURRVAL,
        'https://sportyfit.com/news/ai-gear');

INSERT INTO link_list (link_id, domain_link_id, link)
VALUES (link_list_id_seq.NEXTVAL, domain_link_id_seq.CURRVAL,
        'https://sportyfit.com/news/ai123');

INSERT INTO dashboard (dashboard_id, report_detail_id,
                       result_summary, brand_rate1, brand_rate2, brand_rank,
                       domain_rate1, domain_rate2, brand_mention)
VALUES (dashboard_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        88, 79.0, 76, 2, 80.5, 77, 40);

/* ========== �� ���� #5 ================================= */
INSERT INTO report_list (report_id, keyword, status, data_volume)
VALUES (report_id_seq.NEXTVAL, '���Ÿ� AI ����', 'CREATING', 750);

INSERT INTO report_detail (report_detail_id, report_id, ai_type, json_data)
VALUES (report_detail_id_seq.NEXTVAL, report_id_seq.CURRVAL,
        'GPT', '{"topic":"LuxuryAds","cnt":65}');

INSERT INTO consulting (consulting_id, report_detail_id, result, consulting)
VALUES (consulting_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        '���', '���� ũ������Ƽ�� AB �׽�Ʈ ����');

INSERT INTO domain_link (domain_link_id, report_detail_id,
                         domain_name, rate, chatgpt, gemini, category)
VALUES (domain_link_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        'ai-luxury.net', 4.1, 83, 80, '���Ÿ�');

INSERT INTO link_list (link_id, domain_link_id, link)
VALUES (link_list_id_seq.NEXTVAL, domain_link_id_seq.CURRVAL,
        'https://ai-luxury.net/case-study/2025');

INSERT INTO dashboard (dashboard_id, report_detail_id,
                       result_summary, brand_rate1, brand_rate2, brand_rank,
                       domain_rate1, domain_rate2, brand_mention)
VALUES (dashboard_id_seq.NEXTVAL, report_detail_id_seq.CURRVAL,
        91, 84.2, 80, 1, 86.0, 83, 27);

COMMIT;

 select * from domain_link where domain_link_id = 1;
 select * from link_list where domain_link_id = 5;
 select * from link_list;
 select * from link_list order by  domain_link_id;
 
 select * from domain_link do inner join link_list li
 on do.domain_link_id = li.domain_link_id
 order by do.domain_link_id;
 
 
 select* from  domain_link;
 
        select
            do.report_detail_id as do_report_detail_id,
            do.domain_name as do_domain_name,
            li.link as li_link
        from
            domain_link do inner join link_list li
            on do.domain_link_id = li.domain_link_id
        where do.report_detail_id = 5
        order by
            do.domain_link_id;
            
---����Ʈ���-            
        SELECT
            report_detail_id,
            report_id,
            ai_type,
            created_at,
            json_data
        FROM
            report_detail
        WHERE
            report_detail_id = 5;
