import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';

const content = [
    "Jane M. Fearn-Zimmer is an Elder and Disability Law, Tax, and Trusts and Estates attorney.She dedicates her practice to serving clients in the areas of elder and disability law, special needs planning, asset protection, tax and estate planning and estate administration, guardianships and mental health law, including involuntary commitments.",

    "Known for her dedication to helping others, Jane helps families find the best long-term care and a way to pay for that care, often using public benefits. She guides families of the elderly and disabled through the nursing home admissions process and through the maze of qualifying for public benefits programs to fund long-term care, such as Medicaid and SSI benefits. She also assists the elderly and the disabled and their loved ones in tax and estate and asset protection, as well as assisting and representing clients at Medicaid Fair hearings.",
    "For over 17 years, Jane has helped countless families deal with disability related issues using general durable powers of attorney, health care powers of attorney, guardianships, special needs trusts, and Medicare set aside arrangements where appropriate. She also brings an exceptionally broad perspective to her work due to her strong litigation background. She was a former federal judicial clerk to the Honorable John S. Unpingo, Chief Judge of the District Court of Guam, where she served on the Civil and Criminal Justice Reform Act Committees for the District of Guam.", 
    "Ms. Fearn-Zimmer was honored by the New Jersey Law Journal with the Top Women in the Law 2018 award for her involvement in a Medicaid Caregiver Child Exemption case that helped change the Medicaid Policy in New Jersey. The case is a significant breakthrough in the law, because since approximately 2015, the State of New Jersey frequently denied caregiver child applications on the basis of a child’s ability to work while providing care for the parent. A frequent author and lecturer, Jane speaks and writes on a variety of tax, special needs planning, Medicaid planning, guardianship and estate planning topics to a broad range of groups, including Clear Law Institute, the National Business Institute, the New Jersey State Bar Association, the Burlington County Bar Association, and the Gloucester County Legal Education Association, and more. She also served as the Editor of The Elder Law Report, Including Special Needs Planning, a national newsletter, through which she updates attorneys regarding new developments in elder law and special needs planning.",

    "Jane is an active member of the New Jersey State Bar Association, the New Jersey Chapter of the National Academy of Elder Law Attorneys, and the Burlington County Bar Association and is a former Chair of the New Jersey State Bar Association Elder and Disability Law section. She is an Accredited Attorney with the U.S. Department of Veteran’s Affairs. Jane has been admitted to the New Jersey Bar since 1996, and previously practiced civil litigation in New Jersey."
 
];

const repHeader = [
    "Ms. Fearn-Zimmer is recognized as a leader in the area of using Medicaid compliant annuities.",
    "She filed three federal district court lawsuits against the State of New Jersey on behalf of clients who used Medicaid compliant annuities in order to allow clients to obtain Medicaid eligibility to assist in covering their long term care costs.",
    "Each of the three cases involved the purchase of an immediate annuity pursuant to applicable Medicaid law in order to achieve Medicaid eligibility.",
    "In each case, the State of New Jersey denied Medicaid benefits."
]
const representation = [
    "In Roccia v. Velez (U.S. Dist. Ct. D.N.J., Civ. No. 12-07346, June 6, 2013), the client was a single individual who purchased an immediate annuity for $40,000 in order to achieve Medicaid eligibility for nursing home care. In order to have some additional funds set aside to cover ancillary nursing home costs not covered by Medicaid, an immediate annuity was purchased. Pursuant to a federal court order, the client’s Medicaid application was approved.",
    "In Carlini v. Velez (U.S. Dist. Ct. D.N.J., Civ. No. 12-07290, June 4, 2013), the client resided in a skilled nursing facility. His wife purchased an immediate annuity in the sum of approximately $300,000 from spousal assets which otherwise would have had to be used to pay her husband’s nursing home bills. The wife needed additional funds to allow her to pay her own monthly assisted living bill of approximately $5,000 per month. Without the annuity, both spouses would have been paying over $14,000 per month for long-term care. The annuity purchase allowed her to remain in an assisted living setting. Pursuant to a federal court order, the client’s Medicaid application was approved.",
    "In Flamini v. Velez, (U.S. Dist. Ct. D.N.J., Civ. No. 12-07304, July 19, 2013), the husband purchased an immediate annuity in the amount of $200,000 from his IRA proceeds, which otherwise would have had to be used to pay for his wife’s skilled nursing care. The IRA funds represented the man’s life savings intended to support himself and his wife in retirement. A federal court ordered the State of New Jersey to approve the annuity and to process the Medicaid application for his wife.",
]

const honors = [
    "Top Women in the Law Award recipient, New Jersey Law Journal, 2018",
    "Awesome Attorney, Estate Planning/Asset Protection Law, South Jersey Magazine, 2017",
    "Best Attorney Award for Tax Dispute Resolution, South Jersey Biz magazine, 2015",
    "Attorney of the Month, Pro Bono Award, South Jersey Legal Services, 2014",
    "Awesome Attorney, Estate Planning, South Jersey Magazine, 2013",
    "Market Council Award, PriceWaterhouseCoopers, LLP, 2009",
    "Graduate Tax Award, Temple University Beasley School of Law, 2004",
]
const professionalAffilifations = [
    "New Jersey State Bar Association (NJSBA)",
    "(NJSBA) Chair/Past Chair, Elder & Disability Law Section, 2018 – Present",
    "(NJSBA) Vice-Chair, Elder & Disability Law Section, 2016 – 2017",
    "(NJSBA) Secretary, Elder & Disability Law Section, 2015 – 2016",
    "(NJSBA) Legislative Coordinator, Elder & Disability Law Section, 2014",
    "(NJSBA) Member, Elder & Disability Law Section, 2005 – 2007 & 2013 – Present",
    "Burlington County Bar Association Member, 2012 – Present",
    "Hunterdon County Bar Association Member, 2017 – 2018",
    "Gloucester County Bar Association Member, 2017 – 2018",
    "National Academy of Elder Law Attorneys Member, 2010, 2011, 2013, 2014, 2015, 2016 & 2017, 2022",
    "Estate and Planning Council of Southern New Jersey Member, 2010 – 2017",
    "New Jersey Chapter of the National Association of Women Owned Businesses Member 2010 – 2016",
    "Gloucester County Legal Education Association Member, 2017"
    
]
const communityActivities = [
    "American Cancer Society Member, South Jersey Market Advisory Board, 2016 – 2019"
]
const disclaimer = [
    "The information contained on this website is for general information purposes only. Nothing on this website is intended as legal advice. Transmission of the information is not intended to create, and receipt does not constitute, an attorney-client relationship. No attorney-client relationship will be established unless a written, fully executed engagement letter is provided."
]
const template = [
    "",
    "",
    ""
]
export default function AttorneyProfiles() {
    return <><Row>
    <Col xs={12} sm={7}>
        <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold" }}>About Jane M. Fearn-Zimmer, Esquire</h5>
        <p style={{ fontFamily: "Spectral-Regular", textAlign: "left", lineHeight: 2 }}>{content.map(c => <><p style={{ paddingTop: 5 }}>{c}</p></>)}</p>
       
        <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold" }}>Representative Matters</h5>
        <p style={{ fontFamily: "Spectral-Regular", textAlign: "left", lineHeight: 2 }}>{repHeader.map(repHeader => <><p style={{ paddingTop: 5 }}>{repHeader}</p></>)}</p>
        <ul>
            {representation.map(representation => <li style={{ textAlign: "left", lineHeight: 3, fontFamily: "Spectral-Regular" }}>{representation}</li>)}
        </ul>

        <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold" }}>Honors and Awards</h5>
        <ul>
            {honors.map(honors => <li style={{ textAlign: "left", lineHeight: 3, fontFamily: "Spectral-Regular" }}>{honors}</li>)}
        </ul>



        <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold" }}>Professional Affilifations</h5>
                <ul>
            {professionalAffilifations.map(professionalAffilifations => <li style={{ textAlign: "left", lineHeight: 3, fontFamily: "Spectral-Regular" }}>{professionalAffilifations}</li>)}
        </ul>

        <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold" }}> Community Activity</h5>
        <ul>
            {communityActivities.map(communityActivities => <li style={{ textAlign: "left", lineHeight: 3, fontFamily: "Spectral-Regular" }}>{communityActivities}</li>)}
        </ul>

        <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold" }}>  Disclaimer</h5>
        <p style={{ fontFamily: "Spectral-Regular", textAlign: "left", lineHeight: 2 }}>{disclaimer.map(disclaimer => <><p style={{ paddingTop: 5 }}>{disclaimer}</p></>)}</p>
       

    </Col>
    <Col xs={12} sm={5}>
        <Image
            height="auto"
            width="100%"
            src={require("../media/images/jane-portrait.jpg")}
            rounded
        />
    </Col>
</Row>
</>
}