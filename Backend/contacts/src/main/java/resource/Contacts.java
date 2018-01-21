package resource;
import java.sql.Date;

import org.springframework.data.annotation.Id;

public class Contacts {

    @Id private String id;

	private String firstName;
	private String lastName;
	private String Email;
	private String Company;
	private String City;
	private Integer phoneNumber;
	private Date createdDate;

	public String getCity() {
		return City;
	}

	public void setCity(String City) {
		this.City = City;
	}

	public Date getDate() {
		return createdDate;
	}

	public void setDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Integer getphoneNumber() {
		return phoneNumber;
	}

	public void setphoneNumber(Integer phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getCompany() {
		return Company;
	}

	public void setCompany(String Company) {
		this.Company = Company;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String Email) {
		this.Email = Email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}