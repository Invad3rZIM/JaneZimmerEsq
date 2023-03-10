import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const specialtiesInclude: {
    [key: string]: {
        body: string
    }
} = {
    "Elder Law": {
        body: `The Firm can help anyone concerned about an older adult in Marlton and Cherry Hill, New
        Jersey and the surrounding communities in Southern New Jersey. The firm can help you find the
        right care for your loved one without spending all of your money on long-term care and without
        impoverishing a healthy spouse who wishes to remain at home when the sick spouse can no
        longer be cared for in the home. The firm provides peace of mind and security and shows people
        how to save tens of thousands of dollar, or more, with advanced or crisis planning`
    },
    "Elder Planning": {
        body: `The importance of early estate planning cannot be overstated. Especially in the post-COVID-19
        era, it is critical to always have your estate plan in place and updated periodically. Estate
        planning is like insurance – you need to have your document in place because you never know
        when you will need it. The basics include powers of attorney, living wills and health care
        powers of attorney, and coordinating property ownership and beneficiary designations with the
        overall plan. Since our focus is limited to tax, estate and special needs planning and elder law,
        our lawyers analyze and consider issues that other attorneys who dabble in the field don’t even
        recognize.`
    },
    "Estate Administration": {
        body: `Attorney Fearn-Zimmer has handled countless probate and non-probate estate administrations
        over the years and takes pride in simplifying the estate settlement and probate process so that you
        can relax knowing things are being handled properly. This is particularly important if the estate
        includes a home or other real estate that needs to be sold. By simplifying the process, we can
        also save you time and money. The Firm assists with all aspects of estate and trust settlement and
        probate, including the preparation of New Jersey Inheritance tax returns and federal estate and
        gift tax returns.`
    },
    "Guardianship & Estate Litigation": {
        body: `To Be Provided....`
    },
    "Special Needs Planning": {
        body: `Special Needs Planning plays an important role for families striving to meet current and future
        financial and medical needs of a disabled family member. Through the use of various types of
        “special needs trusts” (including common law supplemental benefit trusts, first-party special
        needs trusts and pooled trusts, such as a joinder account with PLAN New Jersey or other pooled
        trust company, you can preserve a disabled person’s entitlement to various government benefit
        programs designed for people with disabilities. These trusts are also used to preserve personal
        injury judgments for individuals who have been severely injured and disabled due to an accident.
        The overall goal of Special Needs Planning is to substantially improve the life of the disabled
        individuals by preserving public assistance benefits; providing for cost effective medical
        treatment coverage and establishing a way to effectively manage the disabled person’s financial
        resources.`
    },
    "Seminars & Public Speaking": {
        body: `Attorney Fearn-Zimmer is available to speak to local groups and organizations. She provides in-
        service training for social workers and is available to speak on all estate planning and elder law
        topics. If you are interested in having her speak at an event, please contact us.`
    },
}


export function PracticeAreas() {
    return <Col sm={12}>
        <p style={{ fontFamily: "Spectral-Regular", textAlign: "left", paddingLeft: "10%" }}><span style={{ fontWeight: "bold", fontSize: 20 }}>Practice Areas</span><br /><br />
            In order to serve you with the highest quality of counsel possible, the Firm’s founding attorney,
            JANE M. FEARN-ZIMMER, ESQ. is a member of the <a href="https://www.naela.org/">National Academy of Elder Law
                Attorneys (NAELA)</a>. NAELA members are lawyers who help elderly and disabled individuals
            and their families with planning for disability, incapacity and long-term care, Medicaid,
            Medicare coverage (including coverage of nursing home, assisted living, and home care), health
            and long-term care insurance and health care decision-making. NAELA attorneys also draft
            supplemental needs trusts, first-party special needs trusts, and counsel clients regarding retiree
            health and income benefits, selecting long-term care providers, retirement housing and tax, trust
            and estate planning and estate and trust administration.<br />
            <br />
            She presently serves as the Vice-Chair of
            the New Jersey Chapter of the National Academy of Elder Law Attorneys. Of the more than
            40,000 licensed, practicing lawyers licensed in the State of New Jersey, Attorney Fearn-Zimmer
            is one of only approximately 96 New Jersey NAELA members. Members of NAELA are
            attorneys who are experienced and trained in working with the legal problems of older
            Americans and individuals of all ages with disabilities. She is also a past Chair of the New
            Jersey State Bar Association Elder and Disability Law Section and the past Editor of The
            Elder Law Report, Including <a href="https://law-store.wolterskluwer.com/s/product/elder-law-report3mo-subvitallaw-3r/01t0f00000NY7bVAAT?utm_source=CJ&utm_medium=100357191&utm_campaign=Microsoft%20Shopping%20%28Bing%20Rebates%2C%20Coupons%2C%20etc.%29&utm_content=12628705&cjevent=22dddfe1baa411ed81061c430a82b832&cm_mmc=AffiliateLinks-_-CJ-_-LinksClicked-_-SKU&cjdata=MXxOfDB8WXww">Special Needs Planning</a>, a subscription based newsletter
            published by Wolters Kluwers.
            <br /><br />
            The Firm specializes in:
            <br /><br />
            <ul>
                {Object.keys(specialtiesInclude).map(key => <Link to={key.replace(/ /g, "-")}><li >{key}</li></Link>)}
            </ul>
        </p>
    </Col>
}

export function PracticeArea_Field(props: { title: string, body: string }) {
    return <Col xs={12} sm={12}>
        <p style={{ fontFamily: "Spectral-Regular", textAlign: "left",  paddingLeft: "10%" }}><span style={{ fontWeight: "bold", fontSize: 20 }}><a href="../Practice-Areas">Practice Areas</a> / {props.title}</span><br /><br />
            {props.body}
            <br />
        </p>
    </Col>
}