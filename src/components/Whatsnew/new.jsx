import React, { useState, useEffect } from "react";
import "./new.css";

function New({ value }) {
  const [dispCnt, setdispCnt] = useState([]);

  const data = [
    {
      title: "Section 54. Inspection of institutions registered under this Act",
      value: "sec54",
      data: [
        {
          value:
            "The State Government shall appoint inspection committees for the State and district, as the case may be, for all institutions registered or recognised to be fit under this Act for such period and for such purposes, as may be prescribed.",
          sub: null,
        },
        {
          value:
            " Such inspection committees shall mandatorily conduct visits to all facilities housing children in the area allocated, at least once in three months in a team of not less than three members, of whom at least one shall be a woman and one shall be a medical officer, and submit reports of the findings of such visits within a week of their visit, to the District Child Protection Units or State Government, as the case may be, for further action.",
          sub: null,
        },
        {
          value:
            "On the submission of the report by the inspection committee within a week of the inspection, appropriate action shall be taken within a month by the District Child Protection Unit or the State Government and a compliance report shall be submitted to the State Government.",
          sub: null,
        },
      ],
    },
    {
      title: "41. Inspection",
      value: "inspec41",
      data: [
        {
          value:
            "The State Government shall constitute State and district level inspection committees.",
          sub: null,
        },
        {
          value:
            "The State Inspection Committee shall comprise of a maximum of seven members from among the State Government, namely the Board or Committee, the State Commission for the Protection of Child Rights, the State Human Rights Commission, State Adoption Resource Agency, medical and other experts, voluntary organisations and reputed social workers. The Member-Secretary, State Child Protection Society shall be the Chairperson of the State Inspection Committee.",
          sub: null,
        },
        {
          value:
            "The State Inspection Committee shall carry out inspections of the Child Care Institutions as defined under sub-section (21) of section (2) of the Act housing children in the State in Form 46.",
          sub: null,
        },
        {
          value:
            "The State Inspection Committee shall carry out random inspections of the institutions housing children to determine whether such institution is housing children in need of care and protection.",
          sub: null,
        },
        {
          value:
            "The State Inspection Committee shall submit report to the Secretary of the Department implementing the Act.",
          sub: null,
        },
        {
          value:
            "The State Inspection Committee shall make recommendations for improvement and development of the Institutions in accordance with the provisions of the Act and the rules made thereunder and shall forward the same to the State Child Protection Society or the District Child Protection Unit for appropriate action.",
          sub: null,
        },
        {
          value:
            "The State Inspection Committee shall interact with the children during visits to the institution to determine their well-being and to get their feedback.",
          sub: null,
        },
        {
          value:
            "The District Inspection Committee shall comprise of following members",
          sub: [
            "Member of the Board or the Committee",
            "District Child Protection Officer as the Member Secretary",
            "Medical Officer",
            "One member of the civil society working in the area of child rights, care, protection, and welfare",
            "One mental health expert who has experience of working with children",
          ],
        },
        {
          value:
            "The District Inspection Committee shall inspect all Child Care Institutions in the district in Form 46.",
          sub: null,
        },
        {
          value:
            "The inspection of the facilities housing children in the district shall be carried out at least once every three months.",
          sub: null,
        },
        {
          value:
            "The District Inspection Committee shall submit the report of the findings to the District Child Protection Unit or the State Government and shall also make suggestions for improvement and development of the Child Care Institutions in accordance with the provisions of the Act and the rules made thereunder.",
          sub: null,
        },
        {
          value:
            "The District Child Protection Unit shall take necessary follow up action on the report of the District Inspection Committee.",
          sub: null,
        },
      ],
    },
  ];

  useEffect(() => {
    console.log(value);
    for (const element of data) {
      if (element.value === value) {
        setdispCnt([element]);
      }
    }
  }, [value]);

  return (
    <div>
      <div className="newcnt">
        {dispCnt.map((temp) => {
          console.log(temp);

          return (
            <>
              <div className="newheader">{temp.title}</div>
              <div className="newdata">
                {temp.data.map((points, index) => {
                  return (
                    <div className="points">
                      <span className="index">{index + 1}. </span>

                      <span className="point">{points.value}</span>
                      {points.sub ? (
                        <div className="subpnts">
                          <ul>
                            {points.sub.map((subpnt) => {
                              return (
                                <>
                                  <li>{subpnt}</li>
                                </>
                              );
                            })}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

New.defaultProps = {
  value: "sec54",
};

export default New;
