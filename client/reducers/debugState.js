const initial = {
  GoogleResults: {
    reps: [
      {
        name: 'Charles E. Schumer',
        address: [
          {
            line1: '322 Hart Senate Office Building',
            city: 'Washington',
            state: 'DC',
            zip: '20510'
          }
        ],
        party: 'Democratic',
        phones: [
          '(202) 224-6542'
        ],
        urls: [
          'http://www.schumer.senate.gov/'
        ],
        photoUrl: 'http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg',
        channels: [
          {
            type: 'Facebook',
            id: 'chuckschumer'
          },
          {
            type: 'Twitter',
            id: 'SenSchumer'
          },
          {
            type: 'YouTube',
            id: 'SenatorSchumer'
          }
        ]
      },
      {
        name: 'Kirsten E. Gillibrand',
        address: [
          {
            line1: '478 Russell Senate Office Building',
            city: 'Washington',
            state: 'DC',
            zip: '20510'
          }
        ],
        party: 'Democratic',
        phones: [
          '(202) 224-4451'
        ],
        urls: [
          'http://www.gillibrand.senate.gov/'
        ],
        photoUrl: 'http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg',
        channels: [
          {
            type: 'Facebook',
            id: 'KirstenGillibrand'
          },
          {
            type: 'Twitter',
            id: 'SenGillibrand'
          },
          {
            type: 'YouTube',
            id: 'KirstenEGillibrand'
          }
        ]
      },
      {
        name: 'Carolyn B. Maloney',
        address: [
          {
            line1: '2308 Rayburn House Office Building',
            city: 'Washington',
            state: 'DC',
            zip: '20515'
          }
        ],
        party: 'Democratic',
        phones: [
          '(202) 225-7944'
        ],
        urls: [
          'http://maloney.house.gov/'
        ],
        photoUrl: 'http://maloney.house.gov/sites/maloney.house.gov/files/styles/medium/public/wysiwyg_uploaded/CMaloney.jpg?itok=MfBXZlLs',
        channels: [
          {
            type: 'Twitter',
            id: 'RepMaloney'
          },
          {
            type: 'YouTube',
            id: 'carolynbmaloney'
          },
          {
            type: 'Facebook',
            id: 'CarolynMaloney'
          }
        ]
      }
    ],
    district: 'NY-12',
    GoogleResults: {
      kind: 'civicinfo#representativeInfoResponse',
      normalizedInput: {
        line1: '1216 Broadway',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      },
      divisions: {
        'ocd-division/country:us': {
          name: 'United States',
          officeIndices: [
            0,
            1
          ]
        },
        'ocd-division/country:us/state:ny': {
          name: 'New York',
          officeIndices: [
            2,
            4,
            5,
            11,
            12
          ]
        },
        'ocd-division/country:us/state:ny/cd:12': {
          name: 'New York\'s 12th congressional district',
          officeIndices: [
            3
          ]
        },
        'ocd-division/country:us/state:ny/county:new_york': {
          name: 'New York County',
          alsoKnownAs: [
            'ocd-division/country:us/state:ny/borough:manhattan',
            'ocd-division/country:us/state:ny/place:new_york/county:new_york'
          ],
          officeIndices: [
            9,
            10
          ]
        },
        'ocd-division/country:us/state:ny/place:new_york': {
          name: 'New York city',
          officeIndices: [
            6,
            7,
            8
          ]
        }
      },
      offices: [
        {
          name: 'President of the United States',
          divisionId: 'ocd-division/country:us',
          levels: [
            'country'
          ],
          roles: [
            'headOfState',
            'headOfGovernment'
          ],
          officialIndices: [
            0
          ]
        },
        {
          name: 'Vice-President of the United States',
          divisionId: 'ocd-division/country:us',
          levels: [
            'country'
          ],
          roles: [
            'deputyHeadOfGovernment'
          ],
          officialIndices: [
            1
          ]
        },
        {
          name: 'United States Senate',
          divisionId: 'ocd-division/country:us/state:ny',
          levels: [
            'country'
          ],
          roles: [
            'legislatorUpperBody'
          ],
          officialIndices: [
            2,
            3
          ]
        },
        {
          name: 'United States House of Representatives NY-12',
          divisionId: 'ocd-division/country:us/state:ny/cd:12',
          levels: [
            'country'
          ],
          roles: [
            'legislatorLowerBody'
          ],
          officialIndices: [
            4
          ]
        },
        {
          name: 'Governor',
          divisionId: 'ocd-division/country:us/state:ny',
          levels: [
            'administrativeArea1'
          ],
          roles: [
            'headOfGovernment'
          ],
          officialIndices: [
            5
          ]
        },
        {
          name: 'Lieutenant Governor',
          divisionId: 'ocd-division/country:us/state:ny',
          levels: [
            'administrativeArea1'
          ],
          roles: [
            'deputyHeadOfGovernment'
          ],
          officialIndices: [
            6
          ]
        },
        {
          name: 'Mayor',
          divisionId: 'ocd-division/country:us/state:ny/place:new_york',
          officialIndices: [
            7
          ]
        },
        {
          name: 'Comptroller',
          divisionId: 'ocd-division/country:us/state:ny/place:new_york',
          officialIndices: [
            8
          ]
        },
        {
          name: 'Public Advocate',
          divisionId: 'ocd-division/country:us/state:ny/place:new_york',
          officialIndices: [
            9
          ]
        },
        {
          name: 'District Attorney - Manhattan',
          divisionId: 'ocd-division/country:us/state:ny/county:new_york',
          officialIndices: [
            10
          ]
        },
        {
          name: 'Manhattan Borough President',
          divisionId: 'ocd-division/country:us/state:ny/county:new_york',
          officialIndices: [
            11
          ]
        },
        {
          name: 'Attorney General',
          divisionId: 'ocd-division/country:us/state:ny',
          officialIndices: [
            12
          ]
        },
        {
          name: 'State Comptroller',
          divisionId: 'ocd-division/country:us/state:ny',
          officialIndices: [
            13
          ]
        }
      ],
      officials: [
        {
          name: 'Donald J. Trump',
          address: [
            {
              line1: 'The White House',
              line2: '1600 Pennsylvania Avenue NW',
              city: 'Washington',
              state: 'DC',
              zip: '20500'
            }
          ],
          party: 'Republican',
          phones: [
            '(202) 456-1111'
          ],
          urls: [
            'http://www.whitehouse.gov/'
          ],
          photoUrl: 'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg',
          channels: [
            {
              type: 'GooglePlus',
              id: '+whitehouse'
            },
            {
              type: 'Facebook',
              id: 'whitehouse'
            },
            {
              type: 'Twitter',
              id: 'whitehouse'
            },
            {
              type: 'YouTube',
              id: 'whitehouse'
            }
          ]
        },
        {
          name: 'Mike Pence',
          address: [
            {
              line1: 'The White House',
              line2: '1600 Pennsylvania Avenue NW',
              city: 'Washington',
              state: 'DC',
              zip: '20500'
            }
          ],
          party: 'Republican',
          phones: [
            '(202) 456-1111'
          ],
          urls: [
            'http://www.whitehouse.gov/'
          ],
          photoUrl: 'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg',
          channels: [
            {
              type: 'GooglePlus',
              id: '+whitehouse'
            },
            {
              type: 'Facebook',
              id: 'whitehouse'
            },
            {
              type: 'Twitter',
              id: 'whitehouse'
            }
          ]
        },
        {
          name: 'Charles E. Schumer',
          address: [
            {
              line1: '322 Hart Senate Office Building',
              city: 'Washington',
              state: 'DC',
              zip: '20510'
            }
          ],
          party: 'Democratic',
          phones: [
            '(202) 224-6542'
          ],
          urls: [
            'http://www.schumer.senate.gov/'
          ],
          photoUrl: 'http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg',
          channels: [
            {
              type: 'Facebook',
              id: 'chuckschumer'
            },
            {
              type: 'Twitter',
              id: 'SenSchumer'
            },
            {
              type: 'YouTube',
              id: 'SenatorSchumer'
            }
          ]
        },
        {
          name: 'Kirsten E. Gillibrand',
          address: [
            {
              line1: '478 Russell Senate Office Building',
              city: 'Washington',
              state: 'DC',
              zip: '20510'
            }
          ],
          party: 'Democratic',
          phones: [
            '(202) 224-4451'
          ],
          urls: [
            'http://www.gillibrand.senate.gov/'
          ],
          photoUrl: 'http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg',
          channels: [
            {
              type: 'Facebook',
              id: 'KirstenGillibrand'
            },
            {
              type: 'Twitter',
              id: 'SenGillibrand'
            },
            {
              type: 'YouTube',
              id: 'KirstenEGillibrand'
            }
          ]
        },
        {
          name: 'Carolyn B. Maloney',
          address: [
            {
              line1: '2308 Rayburn House Office Building',
              city: 'Washington',
              state: 'DC',
              zip: '20515'
            }
          ],
          party: 'Democratic',
          phones: [
            '(202) 225-7944'
          ],
          urls: [
            'http://maloney.house.gov/'
          ],
          photoUrl: 'http://maloney.house.gov/sites/maloney.house.gov/files/styles/medium/public/wysiwyg_uploaded/CMaloney.jpg?itok=MfBXZlLs',
          channels: [
            {
              type: 'Twitter',
              id: 'RepMaloney'
            },
            {
              type: 'YouTube',
              id: 'carolynbmaloney'
            },
            {
              type: 'Facebook',
              id: 'CarolynMaloney'
            }
          ]
        },
        {
          name: 'Andrew M. Cuomo',
          address: [
            {
              line1: 'NYS State Capitol Building',
              city: 'Albany',
              state: 'NY',
              zip: '12224'
            }
          ],
          party: 'Democratic',
          phones: [
            '(518) 474-8390'
          ],
          urls: [
            'http://www.governor.ny.gov/'
          ],
          photoUrl: 'http://www.governor.ny.gov/assets/images/Cuomobio.jpg',
          channels: [
            {
              type: 'Twitter',
              id: 'nygovcuomo'
            },
            {
              type: 'Facebook',
              id: 'GovernorAndrewCuomo'
            }
          ]
        },
        {
          name: 'Kathy Hochul',
          address: [
            {
              line1: 'NYS State Capitol Building',
              city: 'Albany',
              state: 'NY',
              zip: '12224'
            }
          ],
          party: 'Democratic',
          phones: [
            '(518) 474-8390'
          ],
          urls: [
            'https://www.governor.ny.gov/aboutlieutenantgovernor'
          ],
          channels: [
            {
              type: 'Facebook',
              id: 'ltgovhochulny'
            },
            {
              type: 'Twitter',
              id: 'ltgovhochulny'
            }
          ]
        },
        {
          name: 'Bill de Blasio',
          address: [
            {
              line1: 'City Hall',
              city: 'New York',
              state: 'NY',
              zip: '10007'
            }
          ],
          party: 'Democratic',
          phones: [
            '(212) 639-9675'
          ],
          urls: [
            'http://www1.nyc.gov/office-of-the-mayor/index.page'
          ],
          photoUrl: 'http://www1.nyc.gov/assets/home/images/mayor/index/deblasio.png',
          channels: [
            {
              type: 'Twitter',
              id: 'nycmayorsoffice'
            },
            {
              type: 'YouTube',
              id: 'NYCMayorsOffice'
            },
            {
              type: 'Facebook',
              id: 'NYCMayor'
            }
          ]
        },
        {
          name: 'Scott M. Stringer',
          address: [
            {
              line1: 'One',
              line2: 'Centre Street,',
              city: 'New York',
              state: 'NY',
              zip: '10007'
            }
          ],
          party: 'Democrat',
          phones: [
            '(212) 669-3916'
          ],
          urls: [
            'https://comptroller.nyc.gov/'
          ],
          photoUrl: 'https://comptroller.nyc.gov/wp-content/uploads/2013/12/Headshot_ScottStringer_vertical-sm.jpg',
          emails: [
            'action@comptroller.nyc.gov'
          ],
          channels: [
            {
              type: 'Facebook',
              id: 'scottstringernyc'
            },
            {
              type: 'Twitter',
              id: 'ScottMStringer'
            }
          ]
        },
        {
          name: 'Letitia "Tish" James',
          address: [
            {
              line1: '1 Centre Street, 15th Floor',
              line2: '',
              line3: '',
              city: 'New York',
              state: 'NY',
              zip: '10007'
            }
          ],
          party: 'Democratic',
          phones: [
            '(212) 669-7200'
          ],
          urls: [
            'http://pubadvocate.nyc.gov/'
          ],
          photoUrl: 'http://advocate.nyc.gov/sites/advocate.nyc.gov/files/tishpic.jpg',
          emails: [
            'GetHelp@pubadvocate.nyc.gov'
          ],
          channels: [
            {
              type: 'Twitter',
              id: 'TishJames'
            }
          ]
        },
        {
          name: 'Cyrus Vance Jr.',
          address: [
            {
              line1: 'One',
              line2: 'Hogan Place',
              city: 'New York',
              state: 'NY',
              zip: '10013'
            }
          ],
          party: 'unknown',
          phones: [
            '(212) 335-9000'
          ],
          urls: [
            'http://manhattanda.org/meet-cy-vance'
          ],
          channels: [
            {
              type: 'Facebook',
              id: '149031721821276'
            },
            {
              type: 'Twitter',
              id: 'ManhattanDA'
            }
          ]
        },
        {
          name: 'Gale Brewer',
          address: [
            {
              line1: '1 Centre Street',
              line2: '19th Floor',
              city: 'New York',
              state: 'NY',
              zip: '10007'
            }
          ],
          party: 'Unknown',
          phones: [
            '(212) 669-8300'
          ],
          urls: [
            'http://manhattanbp.nyc.gov/html/home/home.shtml'
          ],
          emails: [
            'info@manhattanbp.nyc.gov'
          ]
        },
        {
          name: 'Eric T. Schneiderman',
          address: [
            {
              line1: 'Office of the Attorney General The Capitol',
              city: 'Albany',
              state: 'NY',
              zip: '12224'
            }
          ],
          party: 'Democratic',
          phones: [
            '(800) 771-7755'
          ],
          urls: [
            'http://www.ag.ny.gov/'
          ],
          channels: [
            {
              type: 'Twitter',
              id: 'AGSchneiderman'
            }
          ]
        },
        {
          name: 'Thomas P. DiNapoli',
          address: [
            {
              line1: 'Office of the State Comptroller',
              line2: '110 State Street',
              city: 'Albany',
              state: 'NY',
              zip: '12236'
            }
          ],
          party: 'Democratic',
          phones: [
            '(518) 474-4044'
          ],
          urls: [
            'https://www.osc.state.ny.us/'
          ],
          emails: [
            'contactus@osc.state.ny.us'
          ],
          channels: [
            {
              type: 'Facebook',
              id: 'nyscomptroller'
            },
            {
              type: 'Twitter',
              id: 'nyscomptroller'
            }
          ]
        }
      ]
    }
  },
  News: {},
  Propublica: {
    'Carolyn B. Maloney': {
      member_id: 'M000087',
      thomas_id: '729',
      first_name: 'Carolyn',
      middle_name: 'B.',
      last_name: 'Maloney',
      date_of_birth: '1946-02-19',
      gender: 'F',
      url: 'http://maloney.house.gov',
      times_topics_url: 'http://topics.nytimes.com/top/reference/timestopics/people/m/carolyn_b_maloney/index.html',
      times_tag: 'Maloney, Carolyn B (Per)',
      govtrack_id: '400251',
      cspan_id: '26162',
      icpsr_id: '21344',
      twitter_account: 'RepMaloney',
      facebook_account: 'RepCarolynMaloney',
      facebook_id: '397176447066236',
      youtube_account: '',
      google_entity_id: '/m/03txd5',
      rss_url: 'http://maloney.house.gov/rss.xml',
      domain: 'maloney.house.gov',
      current_party: 'D',
      most_recent_vote: '2017-02-16',
      roles: [
        {
          congress: '115',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: 'H2NY14037',
          seniority: '26',
          district: '12',
          start_date: '2017-01-03',
          end_date: '2019-01-03',
          bills_sponsored: '3',
          bills_cosponsored: '0',
          missed_votes_pct: '1.01',
          votes_with_party_pct: '96.94',
          committees: []
        },
        {
          congress: '114',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: 'H2NY14037',
          seniority: '24',
          district: '12',
          start_date: '2015-01-06',
          end_date: '2017-01-03',
          bills_sponsored: '35',
          bills_cosponsored: '262',
          missed_votes_pct: '5.45',
          votes_with_party_pct: '96.79',
          committees: [
            {
              name: 'Committee on Financial Services',
              code: 'HSBA',
              api_uri: 'https://api.propublica.org/congress/v1/114/house/committees/HSBA.json',
              rank_in_party: '2',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Joint Economic Committee',
              code: 'JSEC',
              api_uri: 'https://api.propublica.org/congress/v1/114/house/committees/JSEC.json',
              rank_in_party: '7',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Oversight and Government Reform',
              code: 'HSGO',
              api_uri: 'https://api.propublica.org/congress/v1/114/house/committees/HSGO.json',
              rank_in_party: '2',
              begin_date: '',
              end_date: '2017-01-03'
            }
          ]
        },
        {
          congress: '113',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '22',
          district: '12',
          start_date: '2013-01-03',
          end_date: '2015-01-02',
          bills_sponsored: '47',
          bills_cosponsored: '385',
          missed_votes_pct: '4.53',
          votes_with_party_pct: '94.11',
          committees: [
            {
              name: 'Committee on Financial Services',
              code: 'HSBA',
              api_uri: 'https://api.propublica.org/congress/v1/113/house/committees/HSBA.json',
              rank_in_party: '2',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on Oversight and Government Reform',
              code: 'HSGO',
              api_uri: 'https://api.propublica.org/congress/v1/113/house/committees/HSGO.json',
              rank_in_party: '2',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Joint Economic Committee',
              code: 'JSEC',
              api_uri: 'https://api.propublica.org/congress/v1/113/house/committees/JSEC.json',
              rank_in_party: '1',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            }
          ]
        },
        {
          congress: '112',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '20',
          district: '14',
          start_date: '2011-01-04',
          end_date: '2013-01-03',
          bills_sponsored: '65',
          bills_cosponsored: '462',
          missed_votes_pct: '4.42',
          votes_with_party_pct: '93.22',
          committees: [
            {
              name: 'Joint Economic Committee',
              code: 'JSEC',
              api_uri: 'https://api.propublica.org/congress/v1/112/house/committees/JSEC.json',
              rank_in_party: '2',
              begin_date: '2011-03-09',
              end_date: '2013-01-03'
            },
            {
              name: 'Committee on Financial Services',
              code: 'HSBA',
              api_uri: 'https://api.propublica.org/congress/v1/112/house/committees/HSBA.json',
              rank_in_party: '3',
              begin_date: '2011-01-19',
              end_date: '2013-01-03'
            },
            {
              name: 'Committee on Oversight and Government Reform',
              code: 'HSGO',
              api_uri: 'https://api.propublica.org/congress/v1/112/house/committees/HSGO.json',
              rank_in_party: '3',
              begin_date: '2011-01-19',
              end_date: '2013-01-03'
            }
          ]
        },
        {
          congress: '111',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '18',
          district: '14',
          start_date: '2009-01-06',
          end_date: '2011-01-03',
          bills_sponsored: '72',
          bills_cosponsored: '662',
          missed_votes_pct: '7.14',
          votes_with_party_pct: '98.17',
          committees: [
            {
              name: 'Committee on Oversight and Government Reform',
              code: 'HSGO',
              api_uri: 'https://api.propublica.org/congress/v1/111/house/committees/HSGO.json',
              rank_in_party: '3',
              begin_date: '2009-01-28',
              end_date: '2011-01-03'
            },
            {
              name: 'Committee on Financial Services',
              code: 'HSBA',
              api_uri: 'https://api.propublica.org/congress/v1/111/house/committees/HSBA.json',
              rank_in_party: '4',
              begin_date: '2009-01-07',
              end_date: '2011-01-03'
            }
          ]
        },
        {
          congress: '110',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '16',
          district: '14',
          start_date: '2007-01-04',
          end_date: '2009-01-03',
          bills_sponsored: '88',
          bills_cosponsored: '767',
          missed_votes_pct: '5.81',
          votes_with_party_pct: '97.96',
          committees: [
            {
              name: 'Joint Economic Committee',
              code: 'JSEC',
              api_uri: 'https://api.propublica.org/congress/v1/110/house/committees/JSEC.json',
              rank_in_party: '1',
              begin_date: '2007-01-18',
              end_date: '2009-01-03'
            },
            {
              name: 'Committee on Financial Services',
              code: 'HSBA',
              api_uri: 'https://api.propublica.org/congress/v1/110/house/committees/HSBA.json',
              rank_in_party: '4',
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            },
            {
              name: 'Committee on Oversight and Government Reform',
              code: 'HSGO',
              api_uri: 'https://api.propublica.org/congress/v1/110/house/committees/HSGO.json',
              rank_in_party: '5',
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            }
          ]
        },
        {
          congress: '109',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '14',
          district: '14',
          start_date: '2005-01-04',
          end_date: '2007-01-03',
          bills_sponsored: '78',
          bills_cosponsored: '715',
          missed_votes_pct: '2.64',
          votes_with_party_pct: '93.65',
          committees: []
        },
        {
          congress: '108',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '12',
          district: '14',
          start_date: '2003-01-07',
          end_date: '2005-01-03',
          bills_sponsored: '57',
          bills_cosponsored: '588',
          missed_votes_pct: '2.38',
          votes_with_party_pct: '94.63',
          committees: []
        },
        {
          congress: '107',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '10',
          district: '14',
          start_date: '2001-01-03',
          end_date: '2003-01-03',
          bills_sponsored: '52',
          bills_cosponsored: '523',
          missed_votes_pct: '5.12',
          votes_with_party_pct: '92.17',
          committees: []
        },
        {
          congress: '106',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '8',
          district: '14',
          start_date: '1999-01-06',
          end_date: '2001-01-03',
          bills_sponsored: '53',
          bills_cosponsored: '492',
          missed_votes_pct: '3.87',
          votes_with_party_pct: '92.29',
          committees: []
        },
        {
          congress: '105',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '6',
          district: '14',
          start_date: '1997-01-07',
          end_date: '1999-01-03',
          bills_sponsored: '52',
          bills_cosponsored: '439',
          missed_votes_pct: '3.88',
          votes_with_party_pct: '88.26',
          committees: []
        },
        {
          congress: '104',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '4',
          district: '14',
          start_date: '1995-01-04',
          end_date: '1997-01-03',
          bills_sponsored: '29',
          bills_cosponsored: '246',
          missed_votes_pct: '3.58',
          votes_with_party_pct: '90.02',
          committees: []
        },
        {
          congress: '103',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '2',
          district: '14',
          start_date: '1993-01-05',
          end_date: '1995-01-03',
          bills_sponsored: '24',
          bills_cosponsored: '442',
          missed_votes_pct: '4.46',
          votes_with_party_pct: '89.09',
          committees: []
        }
      ]
    },
    'Charles E. Schumer': {
      member_id: 'S000148',
      thomas_id: '1036',
      first_name: 'Charles',
      middle_name: 'E.',
      last_name: 'Schumer',
      date_of_birth: '1950-11-23',
      gender: 'M',
      url: 'https://www.schumer.senate.gov',
      times_topics_url: 'http://topics.nytimes.com/top/reference/timestopics/people/s/charles_e_schumer/index.html',
      times_tag: 'Schumer, Charles E (Per)',
      govtrack_id: '300087',
      cspan_id: '5929',
      icpsr_id: '14858',
      twitter_account: 'SenSchumer',
      facebook_account: 'chuckschumer',
      facebook_id: '15771239406',
      youtube_account: 'SenatorSchumer',
      google_entity_id: '/m/01w74d',
      rss_url: '',
      domain: 'www.schumer.senate.gov',
      current_party: 'D',
      most_recent_vote: '2017-02-17',
      roles: [
        {
          congress: '115',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: 'S8NY00082',
          seniority: '19',
          district: 'N/A',
          start_date: '2017-01-03',
          end_date: '2019-01-03',
          bills_sponsored: '3',
          bills_cosponsored: '0',
          missed_votes_pct: '0.00',
          votes_with_party_pct: '95.83',
          committees: [
            {
              name: 'Joint Committee on the Library',
              code: 'JSLC',
              api_uri: 'https://api.propublica.org/congress/v1/115/senate/committees/JSLC.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Joint Committee on Printing',
              code: 'JSPR',
              api_uri: 'https://api.propublica.org/congress/v1/115/senate/committees/JSPR.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Caucus on International Narcotics Control',
              code: 'SCNC',
              api_uri: 'https://api.propublica.org/congress/v1/115/senate/committees/SCNC.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Select Committee on Intelligence',
              code: 'SLIN',
              api_uri: 'https://api.propublica.org/congress/v1/115/senate/committees/SLIN.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Rules and Administration',
              code: 'SSRA',
              api_uri: 'https://api.propublica.org/congress/v1/115/senate/committees/SSRA.json',
              rank_in_party: '1',
              begin_date: '',
              end_date: '2017-01-03'
            }
          ]
        },
        {
          congress: '114',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: 'H0NY16010',
          seniority: '17',
          district: 'N/A',
          start_date: '2015-01-06',
          end_date: '2017-01-03',
          bills_sponsored: '58',
          bills_cosponsored: '298',
          missed_votes_pct: '0.40',
          votes_with_party_pct: '95.40',
          committees: [
            {
              name: 'Joint Committee on Printing',
              code: 'JSPR',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/JSPR.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Caucus on International Narcotics Control',
              code: 'SCNC',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/SCNC.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Banking, Housing, and Urban Affairs',
              code: 'SSBK',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/SSBK.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Rules and Administration',
              code: 'SSRA',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/SSRA.json',
              rank_in_party: '1',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/SSFI.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on the Judiciary',
              code: 'SSJU',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/SSJU.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Joint Committee on the Library',
              code: 'JSLC',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/JSLC.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            }
          ]
        },
        {
          congress: '113',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '15',
          district: 'N/A',
          start_date: '2013-01-03',
          end_date: '2015-01-02',
          bills_sponsored: '67',
          bills_cosponsored: '316',
          missed_votes_pct: '0.15',
          votes_with_party_pct: '98.93',
          committees: [
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri: 'https://api.propublica.org/congress/v1/113/senate/committees/SSFI.json',
              rank_in_party: '5',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on Rules and Administration',
              code: 'SSRA',
              api_uri: 'https://api.propublica.org/congress/v1/113/senate/committees/SSRA.json',
              rank_in_party: '1',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on the Judiciary',
              code: 'SSJU',
              api_uri: 'https://api.propublica.org/congress/v1/113/senate/committees/SSJU.json',
              rank_in_party: '3',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on Banking, Housing, and Urban Affairs',
              code: 'SSBK',
              api_uri: 'https://api.propublica.org/congress/v1/113/senate/committees/SSBK.json',
              rank_in_party: '3',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            }
          ]
        },
        {
          congress: '112',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '13',
          district: 'N/A',
          start_date: '2011-01-04',
          end_date: '2013-01-03',
          bills_sponsored: '149',
          bills_cosponsored: '324',
          missed_votes_pct: '1.85',
          votes_with_party_pct: '96.44',
          committees: []
        },
        {
          congress: '111',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '11',
          district: 'N/A',
          start_date: '2009-01-06',
          end_date: '2011-01-03',
          bills_sponsored: '148',
          bills_cosponsored: '400',
          missed_votes_pct: '0.44',
          votes_with_party_pct: '98.22',
          committees: [
            {
              name: 'Joint Committee on Printing',
              code: 'JSPR',
              api_uri: 'https://api.propublica.org/congress/v1/111/senate/committees/JSPR.json',
              rank_in_party: '1',
              begin_date: '2009-04-03',
              end_date: '2011-01-03'
            },
            {
              name: 'Joint Committee on the Library',
              code: 'JSLC',
              api_uri: 'https://api.propublica.org/congress/v1/111/senate/committees/JSLC.json',
              rank_in_party: '1',
              begin_date: '2009-04-03',
              end_date: '2011-01-03'
            },
            {
              name: 'Joint Economic Committee',
              code: 'JSEC',
              api_uri: 'https://api.propublica.org/congress/v1/111/senate/committees/JSEC.json',
              rank_in_party: '1',
              begin_date: '2009-01-21',
              end_date: '2011-01-03'
            },
            {
              name: 'Committee on Banking, Housing, and Urban Affairs',
              code: 'SSBK',
              api_uri: 'https://api.propublica.org/congress/v1/111/senate/committees/SSBK.json',
              rank_in_party: '4',
              begin_date: '2009-01-21',
              end_date: '2011-01-03'
            },
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri: 'https://api.propublica.org/congress/v1/111/senate/committees/SSFI.json',
              rank_in_party: '8',
              begin_date: '2009-01-21',
              end_date: '2011-01-03'
            },
            {
              name: 'Committee on the Judiciary',
              code: 'SSJU',
              api_uri: 'https://api.propublica.org/congress/v1/111/senate/committees/SSJU.json',
              rank_in_party: '5',
              begin_date: '2009-01-21',
              end_date: '2011-01-03'
            },
            {
              name: 'Committee on Rules and Administration',
              code: 'SSRA',
              api_uri: 'https://api.propublica.org/congress/v1/111/senate/committees/SSRA.json',
              rank_in_party: '1',
              begin_date: '2009-01-21',
              end_date: '2011-01-03'
            }
          ]
        },
        {
          congress: '110',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '9',
          district: 'N/A',
          start_date: '2007-01-04',
          end_date: '2009-01-03',
          bills_sponsored: '113',
          bills_cosponsored: '472',
          missed_votes_pct: '1.98',
          votes_with_party_pct: '95.96',
          committees: [
            {
              name: 'Joint Committee on the Library',
              code: 'JSLC',
              api_uri: 'https://api.propublica.org/congress/v1/110/senate/committees/JSLC.json',
              rank_in_party: '3',
              begin_date: '2007-03-26',
              end_date: '2009-01-03'
            },
            {
              name: 'Committee on Banking, Housing, and Urban Affairs',
              code: 'SSBK',
              api_uri: 'https://api.propublica.org/congress/v1/110/senate/committees/SSBK.json',
              rank_in_party: '4',
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            },
            {
              name: 'Committee on Finance',
              code: 'SSFI',
              api_uri: 'https://api.propublica.org/congress/v1/110/senate/committees/SSFI.json',
              rank_in_party: '8',
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            },
            {
              name: 'Committee on the Judiciary',
              code: 'SSJU',
              api_uri: 'https://api.propublica.org/congress/v1/110/senate/committees/SSJU.json',
              rank_in_party: '7',
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            },
            {
              name: 'Committee on Rules and Administration',
              code: 'SSRA',
              api_uri: 'https://api.propublica.org/congress/v1/110/senate/committees/SSRA.json',
              rank_in_party: '5',
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            },
            {
              name: 'Joint Economic Committee',
              code: 'JSEC',
              api_uri: 'https://api.propublica.org/congress/v1/110/senate/committees/JSEC.json',
              rank_in_party: '1',
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            }
          ]
        },
        {
          congress: '109',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '7',
          district: 'N/A',
          start_date: '2005-01-04',
          end_date: '2007-01-03',
          bills_sponsored: '98',
          bills_cosponsored: '355',
          missed_votes_pct: '1.24',
          votes_with_party_pct: '92.31',
          committees: []
        },
        {
          congress: '108',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '5',
          district: 'N/A',
          start_date: '2003-01-07',
          end_date: '2005-01-03',
          bills_sponsored: '66',
          bills_cosponsored: '383',
          missed_votes_pct: '0.59',
          votes_with_party_pct: '93.29',
          committees: []
        },
        {
          congress: '107',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '3',
          district: 'N/A',
          start_date: '2001-01-03',
          end_date: '2003-01-03',
          bills_sponsored: '56',
          bills_cosponsored: '348',
          missed_votes_pct: '1.74',
          votes_with_party_pct: '91.80',
          committees: []
        },
        {
          congress: '106',
          chamber: 'Senate',
          title: 'Senator, 3rd Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '1',
          district: 'N/A',
          start_date: '1999-01-06',
          end_date: '2001-01-03',
          bills_sponsored: '67',
          bills_cosponsored: '327',
          missed_votes_pct: '1.04',
          votes_with_party_pct: '95.49',
          committees: []
        },
        {
          congress: '105',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '18',
          district: '9',
          start_date: '1997-01-07',
          end_date: '1999-01-03',
          bills_sponsored: '50',
          bills_cosponsored: '274',
          missed_votes_pct: '15.00',
          votes_with_party_pct: '88.90',
          committees: []
        },
        {
          congress: '104',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '16',
          district: '9',
          start_date: '1995-01-04',
          end_date: '1997-01-03',
          bills_sponsored: '53',
          bills_cosponsored: '175',
          missed_votes_pct: '5.90',
          votes_with_party_pct: '86.04',
          committees: []
        },
        {
          congress: '103',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '14',
          district: '9',
          start_date: '1993-01-05',
          end_date: '1995-01-03',
          bills_sponsored: '59',
          bills_cosponsored: '300',
          missed_votes_pct: '5.53',
          votes_with_party_pct: '89.62',
          committees: []
        },
        {
          congress: '102',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '12',
          district: '10',
          start_date: '1991-01-03',
          end_date: '1993-01-03',
          missed_votes_pct: '4.72',
          votes_with_party_pct: '86.94',
          committees: []
        },
        {
          congress: '101',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '10',
          district: '10',
          start_date: '1989-01-03',
          end_date: '1991-01-03',
          committees: []
        },
        {
          congress: '100',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '8',
          district: '10',
          start_date: '1987-01-06',
          end_date: '1989-01-03',
          committees: []
        },
        {
          congress: '99',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '6',
          district: '10',
          start_date: '1985-01-03',
          end_date: '1987-01-03',
          committees: []
        },
        {
          congress: '98',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '4',
          district: '10',
          start_date: '1983-01-03',
          end_date: '1985-01-03',
          committees: []
        }
      ]
    },
    'Kirsten E. Gillibrand': {
      member_id: 'G000555',
      thomas_id: '1866',
      first_name: 'Kirsten',
      middle_name: 'E.',
      last_name: 'Gillibrand',
      date_of_birth: '1966-12-09',
      gender: 'F',
      url: 'https://www.gillibrand.senate.gov',
      times_topics_url: 'http://topics.nytimes.com/top/reference/timestopics/people/g/kirsten_gillibrand/index.html',
      times_tag: '',
      govtrack_id: '412223',
      cspan_id: '1022862',
      icpsr_id: '20735',
      twitter_account: 'SenGillibrand',
      facebook_account: 'KirstenGillibrand',
      facebook_id: '',
      youtube_account: 'KirstenEGillibrand',
      google_entity_id: '/m/0gnfc4',
      rss_url: '',
      domain: 'www.gillibrand.senate.gov',
      current_party: 'D',
      most_recent_vote: '2017-02-17',
      roles: [
        {
          congress: '115',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: 'S0NY00410',
          seniority: '9',
          district: 'N/A',
          start_date: '2017-01-03',
          end_date: '2019-01-03',
          bills_sponsored: '5',
          bills_cosponsored: '0',
          missed_votes_pct: '0.00',
          votes_with_party_pct: '91.67',
          committees: [
            {
              name: 'Special Committee on Aging',
              code: 'SPAG',
              api_uri: 'https://api.propublica.org/congress/v1/115/senate/committees/SPAG.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Agriculture, Nutrition, and Forestry',
              code: 'SSAF',
              api_uri: 'https://api.propublica.org/congress/v1/115/senate/committees/SSAF.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Armed Services',
              code: 'SSAS',
              api_uri: 'https://api.propublica.org/congress/v1/115/senate/committees/SSAS.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Environment and Public Works',
              code: 'SSEV',
              api_uri: 'https://api.propublica.org/congress/v1/115/senate/committees/SSEV.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            }
          ]
        },
        {
          congress: '114',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: 'S0NY00410',
          seniority: '7',
          district: 'N/A',
          start_date: '2015-01-06',
          end_date: '2017-01-03',
          bills_sponsored: '39',
          bills_cosponsored: '343',
          missed_votes_pct: '0.40',
          votes_with_party_pct: '94.00',
          committees: [
            {
              name: 'Special Committee on Aging',
              code: 'SPAG',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/SPAG.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Environment and Public Works',
              code: 'SSEV',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/SSEV.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Armed Services',
              code: 'SSAS',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/SSAS.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            },
            {
              name: 'Committee on Agriculture, Nutrition, and Forestry',
              code: 'SSAF',
              api_uri: 'https://api.propublica.org/congress/v1/114/senate/committees/SSAF.json',
              rank_in_party: '',
              begin_date: '',
              end_date: '2017-01-03'
            }
          ]
        },
        {
          congress: '113',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '5',
          district: 'N/A',
          start_date: '2013-01-03',
          end_date: '2015-01-02',
          bills_sponsored: '65',
          bills_cosponsored: '384',
          missed_votes_pct: '1.22',
          votes_with_party_pct: '98.00',
          committees: [
            {
              name: 'Committee on Armed Services',
              code: 'SSAS',
              api_uri: 'https://api.propublica.org/congress/v1/113/senate/committees/SSAS.json',
              rank_in_party: '9',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on Agriculture, Nutrition, and Forestry',
              code: 'SSAF',
              api_uri: 'https://api.propublica.org/congress/v1/113/senate/committees/SSAF.json',
              rank_in_party: '9',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Special Committee on Aging',
              code: 'SPAG',
              api_uri: 'https://api.propublica.org/congress/v1/113/senate/committees/SPAG.json',
              rank_in_party: '6',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            },
            {
              name: 'Committee on Environment and Public Works',
              code: 'SSEV',
              api_uri: 'https://api.propublica.org/congress/v1/113/senate/committees/SSEV.json',
              rank_in_party: '9',
              begin_date: '2013-01-03',
              end_date: '2015-01-03'
            }
          ]
        },
        {
          congress: '112',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '3',
          district: 'N/A',
          start_date: '2011-01-04',
          end_date: '2013-01-03',
          bills_sponsored: '82',
          bills_cosponsored: '402',
          missed_votes_pct: '0.62',
          votes_with_party_pct: '95.66',
          committees: []
        },
        {
          congress: '111',
          chamber: 'Senate',
          title: 'Senator, 1st Class',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '1',
          district: 'N/A',
          start_date: '2009-01-27',
          end_date: '2011-01-03',
          bills_sponsored: '84',
          bills_cosponsored: '440',
          missed_votes_pct: '1.06',
          votes_with_party_pct: '97.25',
          committees: [
            {
              name: 'Committee on Agriculture, Nutrition, and Forestry',
              code: 'SSAF',
              api_uri: 'https://api.propublica.org/congress/v1/111/senate/committees/SSAF.json',
              rank_in_party: '10',
              begin_date: '2009-01-26',
              end_date: '2011-01-03'
            },
            {
              name: 'Committee on Foreign Relations',
              code: 'SSFR',
              api_uri: 'https://api.propublica.org/congress/v1/111/senate/committees/SSFR.json',
              rank_in_party: '10',
              begin_date: '2009-01-26',
              end_date: '2011-01-03'
            },
            {
              name: 'Committee on Environment and Public Works',
              code: 'SSEV',
              api_uri: 'https://api.propublica.org/congress/v1/111/senate/committees/SSEV.json',
              rank_in_party: '11',
              begin_date: '2009-01-21',
              end_date: '2011-01-03'
            }
          ]
        },
        {
          congress: '111',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '4',
          district: '20',
          start_date: '2009-01-06',
          end_date: '2009-01-26',
          bills_sponsored: '',
          bills_cosponsored: '',
          missed_votes_pct: '0.00',
          votes_with_party_pct: '89.66',
          committees: [
            {
              name: 'Committee on Agriculture',
              code: 'HSAG',
              api_uri: 'https://api.propublica.org/congress/v1/111/house/committees/HSAG.json',
              rank_in_party: '14',
              begin_date: '2009-01-21',
              end_date: '2009-01-26'
            },
            {
              name: 'Committee on Armed Services',
              code: 'HSAS',
              api_uri: 'https://api.propublica.org/congress/v1/111/house/committees/HSAS.json',
              rank_in_party: '27',
              begin_date: '2009-01-07',
              end_date: '2009-01-26'
            }
          ]
        },
        {
          congress: '110',
          chamber: 'House',
          title: 'Representative',
          state: 'NY',
          party: 'D',
          fec_candidate_id: '',
          seniority: '2',
          district: '20',
          start_date: '2007-01-04',
          end_date: '2009-01-03',
          bills_sponsored: '16',
          bills_cosponsored: '303',
          missed_votes_pct: '5.92',
          votes_with_party_pct: '93.03',
          committees: [
            {
              name: 'Committee on Armed Services',
              code: 'SSAS',
              api_uri: 'https://api.propublica.org/congress/v1/110/house/committees/SSAS.json',
              rank_in_party: '13',
              begin_date: '2011-02-04',
              end_date: '2013-01-03'
            },
            {
              name: 'Special Committee on Aging',
              code: 'SPAG',
              api_uri: 'https://api.propublica.org/congress/v1/110/house/committees/SPAG.json',
              rank_in_party: '9',
              begin_date: '2011-01-05',
              end_date: '2013-01-03'
            },
            {
              name: 'Committee on Agriculture, Nutrition, and Forestry',
              code: 'SSAF',
              api_uri: 'https://api.propublica.org/congress/v1/110/house/committees/SSAF.json',
              rank_in_party: '11',
              begin_date: '2011-01-05',
              end_date: '2013-01-03'
            },
            {
              name: 'Committee on Environment and Public Works',
              code: 'SSEV',
              api_uri: 'https://api.propublica.org/congress/v1/110/house/committees/SSEV.json',
              rank_in_party: '10',
              begin_date: '2011-01-05',
              end_date: '2013-01-03'
            },
            {
              name: 'Committee on Agriculture',
              code: 'HSAG',
              api_uri: 'https://api.propublica.org/congress/v1/110/house/committees/HSAG.json',
              rank_in_party: '18',
              begin_date: '2007-01-12',
              end_date: '2009-01-03'
            },
            {
              name: 'Committee on Armed Services',
              code: 'HSAS',
              api_uri: 'https://api.propublica.org/congress/v1/110/house/committees/HSAS.json',
              rank_in_party: '28',
              begin_date: '2007-01-10',
              end_date: '2009-01-03'
            }
          ]
        }
      ]
    }
  },
  Meetup: {
    eventResults: {
      kind: 'civicinfo#representativeInfoResponse',
      normalizedInput: {
        line1: '1216 Broadway',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      },
      divisions: {
        'ocd-division/country:us': {
          name: 'United States',
          officeIndices: [
            0,
            1
          ]
        },
        'ocd-division/country:us/state:ny': {
          name: 'New York',
          officeIndices: [
            2,
            4,
            5,
            11,
            12
          ]
        },
        'ocd-division/country:us/state:ny/cd:12': {
          name: 'New York\'s 12th congressional district',
          officeIndices: [
            3
          ]
        },
        'ocd-division/country:us/state:ny/county:new_york': {
          name: 'New York County',
          alsoKnownAs: [
            'ocd-division/country:us/state:ny/borough:manhattan',
            'ocd-division/country:us/state:ny/place:new_york/county:new_york'
          ],
          officeIndices: [
            9,
            10
          ]
        },
        'ocd-division/country:us/state:ny/place:new_york': {
          name: 'New York city',
          officeIndices: [
            6,
            7,
            8
          ]
        }
      },
      offices: [
        {
          name: 'President of the United States',
          divisionId: 'ocd-division/country:us',
          levels: [
            'country'
          ],
          roles: [
            'headOfState',
            'headOfGovernment'
          ],
          officialIndices: [
            0
          ]
        },
        {
          name: 'Vice-President of the United States',
          divisionId: 'ocd-division/country:us',
          levels: [
            'country'
          ],
          roles: [
            'deputyHeadOfGovernment'
          ],
          officialIndices: [
            1
          ]
        },
        {
          name: 'United States Senate',
          divisionId: 'ocd-division/country:us/state:ny',
          levels: [
            'country'
          ],
          roles: [
            'legislatorUpperBody'
          ],
          officialIndices: [
            2,
            3
          ]
        },
        {
          name: 'United States House of Representatives NY-12',
          divisionId: 'ocd-division/country:us/state:ny/cd:12',
          levels: [
            'country'
          ],
          roles: [
            'legislatorLowerBody'
          ],
          officialIndices: [
            4
          ]
        },
        {
          name: 'Governor',
          divisionId: 'ocd-division/country:us/state:ny',
          levels: [
            'administrativeArea1'
          ],
          roles: [
            'headOfGovernment'
          ],
          officialIndices: [
            5
          ]
        },
        {
          name: 'Lieutenant Governor',
          divisionId: 'ocd-division/country:us/state:ny',
          levels: [
            'administrativeArea1'
          ],
          roles: [
            'deputyHeadOfGovernment'
          ],
          officialIndices: [
            6
          ]
        },
        {
          name: 'Mayor',
          divisionId: 'ocd-division/country:us/state:ny/place:new_york',
          officialIndices: [
            7
          ]
        },
        {
          name: 'Comptroller',
          divisionId: 'ocd-division/country:us/state:ny/place:new_york',
          officialIndices: [
            8
          ]
        },
        {
          name: 'Public Advocate',
          divisionId: 'ocd-division/country:us/state:ny/place:new_york',
          officialIndices: [
            9
          ]
        },
        {
          name: 'District Attorney - Manhattan',
          divisionId: 'ocd-division/country:us/state:ny/county:new_york',
          officialIndices: [
            10
          ]
        },
        {
          name: 'Manhattan Borough President',
          divisionId: 'ocd-division/country:us/state:ny/county:new_york',
          officialIndices: [
            11
          ]
        },
        {
          name: 'Attorney General',
          divisionId: 'ocd-division/country:us/state:ny',
          officialIndices: [
            12
          ]
        },
        {
          name: 'State Comptroller',
          divisionId: 'ocd-division/country:us/state:ny',
          officialIndices: [
            13
          ]
        }
      ],
      officials: [
        {
          name: 'Donald J. Trump',
          address: [
            {
              line1: 'The White House',
              line2: '1600 Pennsylvania Avenue NW',
              city: 'Washington',
              state: 'DC',
              zip: '20500'
            }
          ],
          party: 'Republican',
          phones: [
            '(202) 456-1111'
          ],
          urls: [
            'http://www.whitehouse.gov/'
          ],
          photoUrl: 'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg',
          channels: [
            {
              type: 'GooglePlus',
              id: '+whitehouse'
            },
            {
              type: 'Facebook',
              id: 'whitehouse'
            },
            {
              type: 'Twitter',
              id: 'whitehouse'
            },
            {
              type: 'YouTube',
              id: 'whitehouse'
            }
          ]
        },
        {
          name: 'Mike Pence',
          address: [
            {
              line1: 'The White House',
              line2: '1600 Pennsylvania Avenue NW',
              city: 'Washington',
              state: 'DC',
              zip: '20500'
            }
          ],
          party: 'Republican',
          phones: [
            '(202) 456-1111'
          ],
          urls: [
            'http://www.whitehouse.gov/'
          ],
          photoUrl: 'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg',
          channels: [
            {
              type: 'GooglePlus',
              id: '+whitehouse'
            },
            {
              type: 'Facebook',
              id: 'whitehouse'
            },
            {
              type: 'Twitter',
              id: 'whitehouse'
            }
          ]
        },
        {
          name: 'Charles E. Schumer',
          address: [
            {
              line1: '322 Hart Senate Office Building',
              city: 'Washington',
              state: 'DC',
              zip: '20510'
            }
          ],
          party: 'Democratic',
          phones: [
            '(202) 224-6542'
          ],
          urls: [
            'http://www.schumer.senate.gov/'
          ],
          photoUrl: 'http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg',
          channels: [
            {
              type: 'Facebook',
              id: 'chuckschumer'
            },
            {
              type: 'Twitter',
              id: 'SenSchumer'
            },
            {
              type: 'YouTube',
              id: 'SenatorSchumer'
            }
          ]
        },
        {
          name: 'Kirsten E. Gillibrand',
          address: [
            {
              line1: '478 Russell Senate Office Building',
              city: 'Washington',
              state: 'DC',
              zip: '20510'
            }
          ],
          party: 'Democratic',
          phones: [
            '(202) 224-4451'
          ],
          urls: [
            'http://www.gillibrand.senate.gov/'
          ],
          photoUrl: 'http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg',
          channels: [
            {
              type: 'Facebook',
              id: 'KirstenGillibrand'
            },
            {
              type: 'Twitter',
              id: 'SenGillibrand'
            },
            {
              type: 'YouTube',
              id: 'KirstenEGillibrand'
            }
          ]
        },
        {
          name: 'Carolyn B. Maloney',
          address: [
            {
              line1: '2308 Rayburn House Office Building',
              city: 'Washington',
              state: 'DC',
              zip: '20515'
            }
          ],
          party: 'Democratic',
          phones: [
            '(202) 225-7944'
          ],
          urls: [
            'http://maloney.house.gov/'
          ],
          photoUrl: 'http://maloney.house.gov/sites/maloney.house.gov/files/styles/medium/public/wysiwyg_uploaded/CMaloney.jpg?itok=MfBXZlLs',
          channels: [
            {
              type: 'Twitter',
              id: 'RepMaloney'
            },
            {
              type: 'YouTube',
              id: 'carolynbmaloney'
            },
            {
              type: 'Facebook',
              id: 'CarolynMaloney'
            }
          ]
        },
        {
          name: 'Andrew M. Cuomo',
          address: [
            {
              line1: 'NYS State Capitol Building',
              city: 'Albany',
              state: 'NY',
              zip: '12224'
            }
          ],
          party: 'Democratic',
          phones: [
            '(518) 474-8390'
          ],
          urls: [
            'http://www.governor.ny.gov/'
          ],
          photoUrl: 'http://www.governor.ny.gov/assets/images/Cuomobio.jpg',
          channels: [
            {
              type: 'Twitter',
              id: 'nygovcuomo'
            },
            {
              type: 'Facebook',
              id: 'GovernorAndrewCuomo'
            }
          ]
        },
        {
          name: 'Kathy Hochul',
          address: [
            {
              line1: 'NYS State Capitol Building',
              city: 'Albany',
              state: 'NY',
              zip: '12224'
            }
          ],
          party: 'Democratic',
          phones: [
            '(518) 474-8390'
          ],
          urls: [
            'https://www.governor.ny.gov/aboutlieutenantgovernor'
          ],
          channels: [
            {
              type: 'Facebook',
              id: 'ltgovhochulny'
            },
            {
              type: 'Twitter',
              id: 'ltgovhochulny'
            }
          ]
        },
        {
          name: 'Bill de Blasio',
          address: [
            {
              line1: 'City Hall',
              city: 'New York',
              state: 'NY',
              zip: '10007'
            }
          ],
          party: 'Democratic',
          phones: [
            '(212) 639-9675'
          ],
          urls: [
            'http://www1.nyc.gov/office-of-the-mayor/index.page'
          ],
          photoUrl: 'http://www1.nyc.gov/assets/home/images/mayor/index/deblasio.png',
          channels: [
            {
              type: 'Twitter',
              id: 'nycmayorsoffice'
            },
            {
              type: 'YouTube',
              id: 'NYCMayorsOffice'
            },
            {
              type: 'Facebook',
              id: 'NYCMayor'
            }
          ]
        },
        {
          name: 'Scott M. Stringer',
          address: [
            {
              line1: 'One',
              line2: 'Centre Street,',
              city: 'New York',
              state: 'NY',
              zip: '10007'
            }
          ],
          party: 'Democrat',
          phones: [
            '(212) 669-3916'
          ],
          urls: [
            'https://comptroller.nyc.gov/'
          ],
          photoUrl: 'https://comptroller.nyc.gov/wp-content/uploads/2013/12/Headshot_ScottStringer_vertical-sm.jpg',
          emails: [
            'action@comptroller.nyc.gov'
          ],
          channels: [
            {
              type: 'Facebook',
              id: 'scottstringernyc'
            },
            {
              type: 'Twitter',
              id: 'ScottMStringer'
            }
          ]
        },
        {
          name: 'Letitia "Tish" James',
          address: [
            {
              line1: '1 Centre Street, 15th Floor',
              line2: '',
              line3: '',
              city: 'New York',
              state: 'NY',
              zip: '10007'
            }
          ],
          party: 'Democratic',
          phones: [
            '(212) 669-7200'
          ],
          urls: [
            'http://pubadvocate.nyc.gov/'
          ],
          photoUrl: 'http://advocate.nyc.gov/sites/advocate.nyc.gov/files/tishpic.jpg',
          emails: [
            'GetHelp@pubadvocate.nyc.gov'
          ],
          channels: [
            {
              type: 'Twitter',
              id: 'TishJames'
            }
          ]
        },
        {
          name: 'Cyrus Vance Jr.',
          address: [
            {
              line1: 'One',
              line2: 'Hogan Place',
              city: 'New York',
              state: 'NY',
              zip: '10013'
            }
          ],
          party: 'unknown',
          phones: [
            '(212) 335-9000'
          ],
          urls: [
            'http://manhattanda.org/meet-cy-vance'
          ],
          channels: [
            {
              type: 'Facebook',
              id: '149031721821276'
            },
            {
              type: 'Twitter',
              id: 'ManhattanDA'
            }
          ]
        },
        {
          name: 'Gale Brewer',
          address: [
            {
              line1: '1 Centre Street',
              line2: '19th Floor',
              city: 'New York',
              state: 'NY',
              zip: '10007'
            }
          ],
          party: 'Unknown',
          phones: [
            '(212) 669-8300'
          ],
          urls: [
            'http://manhattanbp.nyc.gov/html/home/home.shtml'
          ],
          emails: [
            'info@manhattanbp.nyc.gov'
          ]
        },
        {
          name: 'Eric T. Schneiderman',
          address: [
            {
              line1: 'Office of the Attorney General The Capitol',
              city: 'Albany',
              state: 'NY',
              zip: '12224'
            }
          ],
          party: 'Democratic',
          phones: [
            '(800) 771-7755'
          ],
          urls: [
            'http://www.ag.ny.gov/'
          ],
          channels: [
            {
              type: 'Twitter',
              id: 'AGSchneiderman'
            }
          ]
        },
        {
          name: 'Thomas P. DiNapoli',
          address: [
            {
              line1: 'Office of the State Comptroller',
              line2: '110 State Street',
              city: 'Albany',
              state: 'NY',
              zip: '12236'
            }
          ],
          party: 'Democratic',
          phones: [
            '(518) 474-4044'
          ],
          urls: [
            'https://www.osc.state.ny.us/'
          ],
          emails: [
            'contactus@osc.state.ny.us'
          ],
          channels: [
            {
              type: 'Facebook',
              id: 'nyscomptroller'
            },
            {
              type: 'Twitter',
              id: 'nyscomptroller'
            }
          ]
        }
      ]
    }
  }
}

export default initial;
